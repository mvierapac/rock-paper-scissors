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
      errorId: { type: String },
    };
  }

  constructor() {
    super();
    this.text = '';
    this.errorMessage = '';
    this.errorId = `error-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
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
          aria-invalid=${this.errorMessage ? 'true' : 'false'}
          aria-describedby="${this.errorId}"
          @input=${this._handleInput}
        />
      </label>
      <p
        id="${this.errorId}"
        class="error-message ${this.errorMessage ? 'error-message--visible' : ''}"
        aria-live="assertive"
      >
        ${this.errorMessage || ''}
      </p>
    `;
  }
}

customElements.define('input-text', InputText);
