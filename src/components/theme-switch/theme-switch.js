import { LitElement, html } from 'lit';

import styles from './theme-switch.css.js';

class ThemeSwitch extends LitElement {
  static get styles() {
    return [styles];
  }
  static properties = {
    theme: { type: String, reflect: true },
  };

  constructor() {
    super();

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
    } else {
      // Si no hay tema guardado, detectamos preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.theme = prefersDark ? 'dark' : 'light';
    }
    this._applyTheme();
  }

  firstUpdated() {
    const input = this.shadowRoot.querySelector('input[type="checkbox"]');

    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        input.checked = !input.checked;
        this.toggleTheme();
      }
    });
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', this.theme);
    this._applyTheme();
    // this.dispatchEvent(new CustomEvent('theme-changed', { detail: this.theme }));
  }

  _applyTheme() {
    document.body.setAttribute('theme', this.theme);
    this.setAttribute('theme', this.theme);
  }

  render() {
    return html`
      <input
        type="checkbox"
        id="theme-toggle"
        aria-label="Cambiar entre modo claro y oscuro"
        ?checked="${this.theme === 'dark'}"
        @change="${this.toggleTheme}"
      />
      <label class="switch" for="theme-toggle">
        <span class="icons">
          <span class="md-icon">light_mode</span>
          <span class="slider"></span>
          <span class="md-icon">dark_mode</span>
        </span>
      </label>
    `;
  }
}

customElements.define('theme-switch', ThemeSwitch);
