import { LitElement, html } from 'lit';

import { i18nMixin } from '../../mixins/i18n-mixin.js';
import i18n from '../../i18n/i18n.js';

import '@components/btn-action/btn-action.js';
import '@components/input-text/input-text.js';

import homeStyles from './home-view.css.js';

class HomeView extends i18nMixin(LitElement) {
  static get styles() {
    return [homeStyles];
  }

  static get properties() {
    return {
      playerName: { type: String },
    };
  }

  constructor() {
    super();

    this.playerName = '';
    this.t = i18n.t;
  }

  setPlayerName(ev) {
    this.playerName = ev.detail.value;
  }

  handleStartGame() {
    if (this.playerName.trim().length < 3) {
      const inputComponent = this.shadowRoot.getElementById('playerNameInput');
      inputComponent.setError(this.t('homeView.errorMessage'));
      return;
    }

    this.setupPlayerAndRedirect();
  }

  setupPlayerAndRedirect() {
    localStorage.setItem('playerName', this.playerName.trim());
    window.location.href = '/game';
  }

  render() {
    return html`
      <section>
        <input-text id="playerNameInput" @input-text=${this.setPlayerName}></input-text>
        <btn-action text="${this.t('homeView.start')}" @btn-click=${this.handleStartGame}></btn-action>
      </section>
    `;
  }
}

customElements.define('home-view', HomeView);
