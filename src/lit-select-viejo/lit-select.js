import { LitElement, css, html } from "lit-element";
import { when } from 'lit/directives/when.js';
import { setCodigo } from "./lit-select-module";
import { litSelectStyles } from "./lit-select-styles";
import { pubsub } from "./publisherSubscriber";


export class LitSelect extends LitElement {
  static get properties() {
    return {
      /**
       * La propiedad se utiliza para poner una selección por defecto.
       * @type {String}
       */
      selected: { type: String },

      /**
       * La propiedad se utiliza para que en el selector aparezca una opción que diga 'Seleccione una opción'.
       * @type {Boolean}
       */
      strictSelected: { type: Boolean },

      /**
       * La propiedad se utiliza para recibir el endpoint del que se van a traer los datos.
       * @type {String}
       */
      endpoint: { type: String },

      /**
       * La propiedad se utiliza para almacenar los valores que va a mostrar el selector.
       * @type {Array<{codigo: string, descripcion: string}>}
       * Siempre recibe un array del tipo {codigo: string, descripcion: string}.
       */
      options: { type: Array },

      /**
       * La propiedad se utiliza para almacenar valores por defecto sin la necesidad de invocar un endpoint.
       * @type {Array<{codigo: string, descripcion: string}>}
       * Al igual que options, también son del tipo {codigo: string, descripcion: string}.
       */
      optionsDefaults: { type: Array },

      /**
       * La propiedad se utiliza para controlar la apertura o el cierre del selector.
       * @type {Boolean}
       */
      closed: { type: Boolean },

      /**
       * La propiedad se utiliza para deshabilitar el uso del selector.
       * @type {Boolean}
       */
      disabled: { type: Boolean },

      /**
       * La propiedad se utiliza para mostrar solo el valor seleccionado por defecto, limpiando todos los demás valores.
       * @type {Boolean}
       */
      showOnlySelected: { type: Boolean },

      /**
       * La propiedad se utiliza para especificar el tipo del componente, en este caso siempre es 'select'.
       * @type {String}
       */
      type: { type: String },

      /**
       * La propiedad se utiliza para modificar la clave del código que se va a mostrar a la izquierda en el select.
       * El valor por defecto es "codigo", pero puede venir uno que necesitemos que sea diferente y que esté en extraData.
       * @type {String}
       */
      codigo: { type: String },

      /**
       * La propiedad se utiliza para ocultar el código.
       * @type {Boolean}
       */
      withoutCodigo: { type: Boolean },

      /**
       * La propiedad se utiliza para agregar un checkbox dentro de las opciones del selector.
       * @type {Boolean}
       */
      filtroCheckbox: { type: Boolean },

      /**
       * La propiedad se utiliza para agregarle un endpoint más al selector.
       * En caso de seleccionarse el checkbox puesto con @see filtroCheckbox, se pondrá este segundo endpoint como fuente de los datos.
       * @type {String}
       */
      secondEndpoint: { type: String },

      /**
       * La propiedad se utiliza para eventos.
       * @type {String}
       */
      id: { type: String },

      /**
       * La propiedad se utiliza para eventos.
       * @type {String}
       */
      ref: { type: String },
    };
  }

  static get styles() {
    return [
      litSelectStyles,
      css`
        .container-inputs {
          display: flex;
        }
        .checkbox-wrapper input[type="checkbox"] {
          width: 4rem;
          height: 1rem;
        }
        lit-label {
          margin: 0px;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.type = "select";
    this.endpoint = "";
    this.value = { codigo: "0", descripcion: "Cargando..." };
    this.options = [];
    this.optionsDefault = [];
    this.closed = true;
    this.disabled = false;
    this.codigo = "codigo";
    this.withoutCodigo = false;
    this.showOnlySelected = false;
    this.id = this.generateUniqueID();
  }

  generateUniqueID() {
    const timestamp = new Date().getTime().toString(16); // Valor de tiempo actual en hexadecimal
    const randomSuffix = Math.random().toString(16).substr(2, 8); // Sufijo aleatorio
    const uniqueID = timestamp + randomSuffix;
    return uniqueID;
  }

  _handleParentChange = (event) => {
    if (this.ref && this.ref != "" && this.ref === event?.detail?.refid) {
      event?.detail?.option?.codigo &&
        this._getOptions(event?.detail?.option?.codigo);
    }
  };

  /**
   * Este método es llamado cuando el componente es conectado al DOM.
   * Realiza las configuraciones necesarias, como la adición de suscriptores a eventos.
   */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("selectionChange", this._handleParentChange);
    pubsub.subscribe("select-open", this.handleOpen.bind(this));
  }

  /**
   * Maneja la apertura del selector para un ID específico. Este método se le pasa a método a @see connectedCallback
   * para poder manejar la apertura de los distintos se seleccionan.
   * @param {string} id - El ID para el que se debe manejar la apertura del selector.
   */
  handleOpen(id) {
    /**
     * Verifica si el ID proporcionado es diferente al ID del componente y si el selector no está cerrado.
     * Si se cumple, cierra el selector.
     *
     * @param {string} id - El ID para el que se debe manejar la apertura del selector.
     */
    if (this.id !== id && !this.closed) {
      this.closed = true;
    }
  }

  /**
   * Alterna la visibilidad del selector (lo abre o cierra) si el componente no está deshabilitado.
   * También publica el evento para que los demás selectores que no son los clickeados se cierren
   */
  _toggleMenu() {
    if (!this.disabled) {
      pubsub.publish("select-open", this.id);
      this.closed = !this.closed;
    }
  }

  disconnectedCallback() {
    document.removeEventListener("selectionChange", this._handleParentChange);
    super.disconnectedCallback();
  }

  get _input() {
    return this.renderRoot?.querySelector("#input") ?? null;
  }

  updated(changedProperties) {
    if (
      changedProperties.has("endpoint") ||
      changedProperties.has("optionsDefault")
    ) {
      this._getOptions();
    }
    if (changedProperties.has("selected") && this.selected != "") {
      this._setDefaultOption();
      this.requestUpdate();
    }
  }

  _getOptions(urlParameter) {
    if (!this.endpoint) {
      if (this.optionsDefault.length === 0) {
        this.optionsDefault = [
          { codigo: "-1", descripcion: "No fue posible acceder al servidor" },
        ];
      }
      this._processOptions(this.optionsDefault);
      return;
    }
    fetch("/websgh" + [this.endpoint, urlParameter].join(""))
      .then((response) => response.json())
      .then((response) => this._processOptions(response.data)) //es un array completo
      .catch((error) => this._processError(error));
  }

  _processOptions(opciones) {
    if (opciones.length == 0)
      opciones = [{ codigo: "0", descripcion: "Sin opciones" }];
    this.options = opciones
      .filter((option) => option?.extraData?.habilitado != 0)
      .map((opt) => {
        return { ...opt, display: "block" };
      });
    this._setDefaultOption();
  }

  _processError(error) {
    console.error("Error: ", error);
    this.options = [
      { codigo: "-1", descripcion: "Error al obtener las opciones" },
    ];
    this._setDefaultOption();
  }

  _setDefaultOption() {
    const findOption = (property) => {
      const regex = new RegExp(property, "i");
      return this.options.find(
        (opt) =>
          regex.test(opt?.descripcion) || regex.test(opt?.codigo?.toString())
      );
    };

    let option;
    if (this.strictSelected) {
      option = { codigo: "", descripcion: "Seleccione una opción" };
    } else {
      option = findOption(this.selected) || this.options[0];
    }

    this._handleMenuOption(option);
  }

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

  _filterList = (searchTerm) => {
    this.options = this.options.map((opt) =>
      opt.descripcion.indexOf(searchTerm.toUpperCase()) != -1
        ? { ...opt, display: "block" }
        : { ...opt, display: "none" }
    );
  };

  _onClickCheckbox = () => {
    let aux = this.endpoint;
    this.endpoint = this.secondEndpoint;
    this.secondEndpoint = aux;
    this.requestUpdate();
  };

  render() {
    const selectedOption = this.options.find(
      (option) => option.codigo === this.value.codigo
    );
    return html`
      <div class="container">
        <div
          class="lit-select-container ${this.disabled ? "disabled" : ""}"
          @click=${this._toggleMenu}
        >
          ${when(
            this.withoutCodigo,
            () => nothing,
            () =>
              html`<span class="lit-select-code"
                >${setCodigo({ value: this.value, codigo: this.codigo })}</span
              >`
          )}
          <span class="lit-select-description">${this.value?.descripcion}</span>
          <span class="lit-select-icon toggle"></span>
        </div>
        <div class="body ${this.closed ? "closed" : "open"}">
          <div class="container-inputs">
            <input
              id="input"
              type="search"
              value=${this.searchText}
              @input=${(e) => this._filterList(e.target.value)}
              placeholder="Buscar..."
            />
            ${when(
              this.filtroCheckbox,
              () => html`
                <div class="checkbox-wrapper">
                  <lit-label label="otros cc"></lit-label>
                  <input
                    id="checkbox"
                    type="checkbox"
                    @click=${this._onClickCheckbox}
                  />
                </div>
              `
            )}
          </div>
          ${when(
            this.showOnlySelected,
            () => html` <div
              class="option"
              style="display:block"
              value=${selectedOption?.codigo}
              @click="${() =>
                this._handleMenuOption(selectedOption, this._toggleMenu())}"
              data-extra="${JSON.stringify(selectedOption?.extraData)}"
            >
              ${selectedOption?.descripcion}
            </div>`,
            () =>
              this.options.map(
                (option) =>
                  html` <div
                    class="option"
                    style="display:${option?.display}"
                    value=${option?.codigo}
                    @click="${() =>
                      this._handleMenuOption(option, this._toggleMenu())}"
                    data-extra="${JSON.stringify(option.extraData)}"
                  >
                    ${option?.descripcion}
                  </div>`
              )
          )}
        </div>
      </div>
    `;
  }
}

customElements.define("lit-select", LitSelect);
