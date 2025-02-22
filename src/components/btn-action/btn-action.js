import { LitElement, html } from 'lit';

import stylesBtnAction from './btn-action.css.js';

class BtnAction extends LitElement {
  static get styles() {
    return [stylesBtnAction];
  }

  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();

    this.text = 'Click Me';
  }

  _handleClick() {
    this.dispatchEvent(
      new CustomEvent('btn-click', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button class="btn-game" @click=${this._handleClick}>${this.text}</button>
    `;
  }
}

customElements.define('btn-action', BtnAction);
