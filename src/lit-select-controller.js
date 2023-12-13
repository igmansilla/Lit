import { Task, initialState } from "@lit/task";

export class LitSelectController {
  constructor(host) {
    // Store a reference to the host
    this.host = host;
    // Register for lifecycle updates
    host.addController(this);
  }

  _myTask = new Task(this, {
    task: async ([endpoint], { signal }) => {
      debugger;

      if (this.host.optionsDefault && this.host.optionsDefault.length > 0) {
        return this.useDefaultOptions(this.host.selected);
      }

      return this.fetchOptions(endpoint, signal, this.host.selected);
    },
    args: () => [this.endpoint],
  });

  async fetchOptions(endpoint, signal, selected) {
    if (endpoint === undefined || endpoint === "") {
      return initialState;
    }

    const data = await getOpciones(endpoint, signal);
    this.host.options = data;

    // Verifica si hay una opción seleccionada, y úsala si existe
    this.host.value = selected
      ? this.host.options.find(
          (opt) => opt.codigo === selected || opt.descripcion === selected
        ) || this.host.options  [0]
      : this.host.options[0];

    this.host.optionsRender = this.host.options;
    return this.host.options;
  }

  useDefaultOptions(selected) {
    // Verifica si hay una opción seleccionada, y úsala si existe
    this.host.value = selected
      ? this.host.options.find(
          (opt) => opt.codigo === selected || opt.descripcion === selected
        ) || this.host.optionsDefault[0]
      : this.host.optionsDefault[0];

    this.host.optionsRender = this.host.options = this.host.optionsDefault;
    return this.host.optionsDefault;
  }

  render(renderFunctions) {
    return this.task.render(renderFunctions);
  }
}
