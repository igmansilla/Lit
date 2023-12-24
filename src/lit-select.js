import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { iconoFlechita } from "./caret-down.js";
import { LitSelectController } from "./lit-select-controller.js";
import { generateUniqueID } from "./lit-select-module.js";
import { litSelectStyles } from "./lit-select-styles.js";
import { pubsub } from "./publisherSubscriber.js";


export class LitSelect extends LitElement {
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
    this.closed = true;
    this.controller = new LitSelectController(this);
  }

  static get styles() {
    return [litSelectStyles];
  }

  connectedCallback() {
    super.connectedCallback();
    pubsub.subscribe("select-open", this.handleOpen.bind(this));
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
          ${this.controller.render({
      initial: () => html`<span class="lit-select-esperando">Esperando para comenzar</span>`,
      pending: () => html`<span class="lit-select-cargando">Cargando...</span>`,
      complete: () => {
        return html`
                <span class="lit-select-code">${this.value?.codigo}</span>
                <span class="lit-select-description"
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
        html`<span class="lit-select-error">Error al intentar obtener las opciones</span>`,
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
            @input=${(e) => this.controller._filterOptions(e.target.value)}
            placeholder="Buscar..."
          />
          ${map(this.optionsRender, (option) => {
      return html` <div
              class="option"
              value=${option?.codigo}
              @click=${() => this.controller._handleMenuOption(option, this._toggleMenu.bind(this))}
            >
              ${option?.descripcion}
            </div>`;
    })}
        </div>
      </div>
    `;
  }
}

customElements.define("lit-select", LitSelect);
