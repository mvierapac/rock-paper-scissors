import { LitElement, html } from 'lit';

import stylesAppBanner from './app-banner.css.js';
import { globalStyles } from '@styles/global-styles.js';

import '@components/theme-switch/theme-switch.js';

class AppBanner extends LitElement {
  static get styles() {
    return [stylesAppBanner, globalStyles];
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header class="header-app">
        <a href="/">
          <img class="logo" src="../images/logo.png" alt="site-logo" />
        </a>
        <theme-switch></theme-switch>
      </header>
    `;
  }
}

customElements.define('app-banner', AppBanner);
