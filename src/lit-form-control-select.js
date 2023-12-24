import { css, html } from 'lit';
import { LitSelect } from './lit-select';

export class LitFormControlSelect extends LitSelect {
    static get properties() {
        return {
            ...super.properties,
            label: { type: String },
            hidden: { type: Boolean },
        };
    }

    static get styles() {
        return [
            super.styles,
            css`
            * {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          "Courier New", monospace;
      }
        :host {
          --color__blue--680: #04273c;
        }

        .lit-label {
          display: inline-block;
          margin: 0rem 0rem 0.5rem 0rem;
          color: var(--color__blue--680);
        }
      `,
        ];
    }

    render() {
        return html`
      <label class="lit-label">${this.label}</label>
      ${super.render()}
    `;
    }
}

customElements.define('lit-form-control-select', LitFormControlSelect);
