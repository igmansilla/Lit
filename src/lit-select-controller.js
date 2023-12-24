import { Task, initialState } from "@lit/task";
import { getOpciones } from "./lit-select-service.js";

export class LitSelectController {

  host;

  constructor(host) {
    this.host = host;

    this.task = new Task(host, {
      task: async ([endpoint], { signal }) => {
        if (this.host.optionsDefault && this.host.optionsDefault.length > 0) {
          return this.useDefaultOptions(this.host.selected);
        }

        return this.fetchOptions(endpoint, signal, this.host.selected);
      },
      args: () => [this.host.endpoint],
    });
  }

  _filterOptions = (searchTerm) => {
    this.host.optionsRender = this.host?.options?.filter((opt) => {
      const codigoMatch = opt.codigo.indexOf(searchTerm.toUpperCase()) !== -1;
      const descripcionMatch =
        opt.descripcion.indexOf(searchTerm.toUpperCase()) !== -1;
      return codigoMatch || descripcionMatch;
    });
  };

  _handleMenuOption(option, callback) {
    this.host.value = option;
    const customEvent = new CustomEvent("selectionChange", {
      bubbles: true,
      composed: true,
      detail: {
        option: this.host.value,
      },
    });
    this.host.dispatchEvent(customEvent);
    callback && callback();
  }

  async fetchOptions(endpoint, signal, selected) {
    if (endpoint === undefined || endpoint === "") {
      return initialState;
    }

    const data = await getOpciones(endpoint, signal);
    this.host.options = data;

    this.setFirstOptionValue(selected);

    this.host.optionsRender = this.host.options;
    return this.host.options;
  }

  setFirstOptionValue(selected) {
    if (this.host.strict) {
      // Si strict es true, establecer la primera opción como "Elige una opción por favor"
      this.host.value = { codigo: "", descripcion: "Elige una opción por favor" };
    } else {
      // Si strict no está presente o es false, establecer la primera opción según la lógica existente
      this.host.value = selected
        ? this.host.options.find(
          (opt) => opt.codigo === selected || opt.descripcion === selected
        ) || this.host.options[0]
        : this.host.options[0];
    }
  }

  useDefaultOptions(selected) {
    this.setFirstOptionValue(selected);

    this.host.optionsRender = this.host.options = this.host.optionsDefault;
    return this.host.optionsDefault;
  }

  render(renderFunctions) {
    return this.task.render(renderFunctions);
  }
}

