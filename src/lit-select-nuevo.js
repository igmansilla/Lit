import { Task, initialState } from "@lit/task";
import { LitElement, css, html, unsafeCSS } from "lit-element";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { iconoFlechita } from "./caret-down";
import * as font from "./fonts/SecuritasPro-Bold.woff2";
import { generateUniqueID } from "./lit-select-module";
import { getOpciones } from "./lit-select-service";
import { litSelectStyles } from "./lit-select-styles";
import { pubsub } from "./publisherSubscriber";

export class LitSelectNuevo extends LitElement {
  static get properties() {
    return {
      /**
       * La propiedad se utiliza para recibir el endpoint del que se van a traer los datos.
       * @type {String}
       */
      endpoint: { type: String },
      /**
       * La propiedad se utiliza para deshabilitar el uso del selector.
       * @type {Boolean}
       */
      disabled: { type: Boolean },
      options: { type: Array },
      optionsRender: { type: Array },
      optionsDefault: { type: Array },
      /**
       * La propiedad se utiliza para poner una selección por defecto.
       * @type {String}
       */
      selected: { type: String },

      /**
       * La propiedad se utiliza para que en el selector aparezca una opción que diga 'Seleccione una opción'.
       * @type {Boolean}
       */
      strict: { type: Boolean },
      /**
       * La propiedad se utiliza para controlar la apertura o el cierre del selector.
       * @type {Boolean}
       */
      closed: { type: Boolean },
      id: { type: String },
    };
  }

  constructor() {
    super();
    this.id = generateUniqueID();
  }

  static get styles() {
    return [litSelectStyles];
  }

  connectedCallback() {
    super.connectedCallback();
    pubsub.subscribe("select-open", this.handleOpen.bind(this));
  }

  async fetchOptions(endpoint, signal, selected) {
    if (endpoint === undefined || endpoint === "") {
      return initialState;
    }

    const data = await getOpciones(endpoint, signal);
    this.options = data;

    // Verifica si hay una opción seleccionada, y úsala si existe
    this.value = selected
      ? this.options.find((opt) => opt.codigo === selected || opt.descripcion === selected) || this.options[0]
      : this.options[0];

    this.optionsRender = this.options;
    return this.options;
  }

  useDefaultOptions(selected) {
    // Verifica si hay una opción seleccionada, y úsala si existe
    this.value = selected
      ? this.options.find((opt) => opt.codigo === selected || opt.descripcion === selected) || this.optionsDefault[0]
      : this.optionsDefault[0];

    this.optionsRender = this.options = this.optionsDefault;
    return this.optionsDefault;
  }

  _myTask = new Task(this, {
    task: async ([endpoint], { signal }) => {
      if (this.optionsDefault && this.optionsDefault.length > 0) {
        return this.useDefaultOptions(this.selected);
      }

      return this.fetchOptions(endpoint, signal, this.selected);
    },
    args: () => [this.endpoint],
  });

  _filterOptions = (searchTerm) => {
    this.optionsRender = this.options.filter((opt) => {
      const codigoMatch = opt.codigo.indexOf(searchTerm.toUpperCase()) !== -1;
      const descripcionMatch = opt.descripcion.indexOf(searchTerm.toUpperCase()) !== -1;
      return codigoMatch || descripcionMatch;
    });
  };

  _handleMenuOption(option, callback) {
    this.value = option;
    const customEvent = new CustomEvent("selectionChange", {
      bubbles: true,
      composed: true,
      detail: {
        option: this.value,
        ...(this.id && { refid: this.id }),
      },
    });
    this.dispatchEvent(customEvent);
    callback && callback();
  }

  _toggleMenu() {
    if (!this.disabled) {
      pubsub.publish("select-open", this.id);
      this.closed = !this.closed;
    }
  }

  handleOpen(id) {
    if (this.id !== id && !this.closed) {
      this.closed = true;
    }
  }

  render() {
    return html`
      <div class="container">
        <div
          class=${classMap({
            "lit-select-container": true,
            disabled: this.disabled,
          })}
          @click=${this._toggleMenu}
        >
          ${this._myTask.render({
            initial: () => html`<span>Esperando para comenzar</span>`,
            pending: () => html`<span>Cargando...</span>`,
            complete: () => {
              return html`
                <span class="lit-select-code">${this.value?.codigo}</span>
                <span class="lit-select-description securitas-bold"
                  >${this.value?.descripcion}</span
                >
                <span
                  class=${classMap({
                    "lit-select-icon": true,
                    toggle: this.closed,
                  })}
                >
                  ${iconoFlechita}
                </span>
              `;
            },
            error: () =>
              html`<span>Error al intentar obtener las opciones</span>`,
          })}
        </div>
        <div
          class=${classMap({
            body: true,
            closed: this.closed,
            open: !this.closed,
          })}
        >
          <input
            id="input"
            type="search"
            value=${this.searchText}
            @input=${(e) => this._filterOptions(e.target.value)}
            placeholder="Buscar..."
          />
          ${map(this.optionsRender, (option) => {
            return html` <div
              class="option"
              value=${option?.codigo}
              @click=${() => this._handleMenuOption(option, this._toggleMenu())}
            >
              ${option?.descripcion}
            </div>`;
          })}
        </div>
      </div>
    `;
  }
}

customElements.define("lit-select-nuevo", LitSelectNuevo);
