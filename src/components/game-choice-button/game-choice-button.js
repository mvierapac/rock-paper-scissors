import { LitElement, html } from 'lit';

import stylesBtnAction from './game-choice-button.css.js';

class GameChoiceButton extends LitElement {
  static get styles() {
    return [stylesBtnAction];
  }

  static get properties() {
    return {
      choice: { type: String },
    };
  }

  constructor() {
    super();

    this.choice = '';
  }

  get imageSrc() {
    switch (this.choice) {
      case 'rock':
        return '/images/rock.png';
      case 'paper':
        return '/images/paper.png';
      case 'scissors':
        return '/images/scissors.png';
      default:
        return '';
    }
  }

  get ariaLabel() {
    switch (this.choice) {
      case 'rock':
        return 'Choose rock';
      case 'paper':
        return 'Choose paper';
      case 'scissors':
        return 'Choose scissors';
      default:
        return '';
    }
  }

  get altText() {
    switch (this.choice) {
      case 'rock':
        return 'Rock';
      case 'paper':
        return 'Paper';
      case 'scissors':
        return 'Scissors';
      default:
        return '';
    }
  }

  _handleClick() {
    this.dispatchEvent(
      new CustomEvent('choice-button', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button class="choice-button" @click=${this._handleClick} aria-label="${this.ariaLabel}">
        <img src="${this.imageSrc}" alt="${this.altText}" />
      </button>
    `;
  }
}

customElements.define('game-choice-button', GameChoiceButton);
