import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import { i18nMixin } from './mixins/i18n-mixin.js';

import '@components/animated-wave-background/animated-wave-background.js';
import '@components/app-banner/app-banner.js';

import '@views/home/home-view.js';
import '@views/game/game-view.js';

import styles from './app-root.css.js';

class AppRoot extends i18nMixin(LitElement) {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();

    this.name = localStorage.getItem('playerName') || '';
    this.router = null;
  }

  async firstUpdated() {
    const game = this.shadowRoot.querySelector('#game');
    this.router = new Router(game);

    this.router.setRoutes([
      { path: '/', component: 'home-view' },
      {
        path: '/game',
        action: (context, commands) => this.guardGameRoute(context, commands),
        component: 'game-view',
      },
      { path: '(.*)', redirect: '/' },
    ]);
  }

  /**
   * Guards the game route by checking if a player name is stored.
   * If the player name is not found in the local storage or is an empty string,
   * it redirects to the home route ('/').
   *
   * @param {Object} context - The context object provided by the router.
   * @param {Object} commands - The commands object provided by the router, used for redirection.
   * @returns {Object|undefined} - Returns a redirection command if the player name is not found, otherwise undefined.
   */
  guardGameRoute(context, commands) {
    // get name of localStorage if it is not defined in property
    const storedName = this.name || localStorage.getItem('playerName');

    if (!storedName || storedName.trim() === '') {
      // Redirect to home (/) if there is no name
      return commands.redirect('/');
    }

    this.name = storedName;
  }

  render() {
    return html`
      <div class="app">
        <nav>
          <app-banner></app-banner>
        </nav>
        <div id="game"></div>
      </div>
    `;
  }
}

customElements.define('app-root', AppRoot);
