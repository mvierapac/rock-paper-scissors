import { LitElement, html } from 'lit';

import stylesBtnAction from './game-choice-button.css.js';
import { i18nMixin } from '../../mixins/i18n-mixin.js';
import i18n from '../../i18n/i18n.js';

class GameChoiceButton extends i18nMixin(LitElement) {
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
    this.t = i18n.t;
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
    const choices = {
      rock: 'gameView.rock',
      paper: 'gameView.paper',
      scissors: 'gameView.scissors',
    };

    return this.choice in choices ? `${this.t('gameView.choose')} ${this.t(choices[this.choice])}` : '';
  }

  get altText() {
    const ALT_TEXTS = {
      rock: this.t('gameView.rock'),
      paper: this.t('gameView.paper'),
      scissors: this.t('gameView.scissors'),
    };
    return ALT_TEXTS[this.choice] || '';
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
