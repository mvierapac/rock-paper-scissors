import { LitElement, html } from 'lit';

import stylesInputText from './input-text.css.js';

class InputText extends LitElement {
  static get styles() {
    return [stylesInputText];
  }

  static get properties() {
    return {
      text: { type: String },
      errorMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
    this.errorMessage = '';
  }

  _handleInput(event) {
    this.text = event.target.value;
    this.errorMessage = '';
    this.dispatchEvent(
      new CustomEvent('input-text', {
        detail: { value: this.text },
        bubbles: true,
        composed: true,
      })
    );
  }

  setError(message) {
    this.errorMessage = message;
  }

  render() {
    return html`
      <label>
        Nombre del jugador
        <input
          class="input-text ${this.errorMessage ? 'error' : ''}"
          type="text"
          .value=${this.text}
          @input=${this._handleInput}
        />
      </label>
      <p class="error-message ${this.errorMessage ? 'error-message--visible' : ''}">${this.errorMessage || ' '}</p>
    `;
  }
}

customElements.define('input-text', InputText);
