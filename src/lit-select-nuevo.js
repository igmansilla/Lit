import { Task } from "@lit/task";
import { LitElement, html } from "lit-element";
import { classMap } from "lit/directives/class-map.js";
import { generateUniqueID } from "./lit-select-module";
import { getOpciones } from "./lit-select-service";
import { litSelectStyles } from "./lit-select-styles";
import { pubsub } from "./publisherSubscriber";
import { map } from "lit/directives/map.js";

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

  _myTask = new Task(this, {
    task: async ([endpoint], { signal }) => {
      if (endpoint === undefined || endpoint === "") {
        // This puts the task back into the INITIAL state
        return initialState;
      }
      const data =  await getOpciones(endpoint, signal);
      this.optionsRender = data
      this.value = data[0]
      return data
    },
    args: () => [this.endpoint],
  });

  _filterOptions = (searchTerm) => {
    this.optionsRender = this.options.filter(
      (opt) => opt.descripcion.indexOf(searchTerm.toUpperCase()) != -1
    );
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
            initial: () => html`<p>Esperando para comenzar</p>`,
            pending: () => html`<span>Cargando...</span>`,
            complete: () => {
              return html` <span class="lit-select-code"
                  >${this.value?.codigo}</span
                >
                <span class="lit-select-description"
                  >${this.value?.descripcion}</span
                >
                <span class="lit-select-icon toggle"></span>`;
            },
            error: () => html`<span>Error al intentar obtener las opciones</span>`,
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
