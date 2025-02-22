import i18n from '../i18n/i18n.js';

export const i18nMixin = (Base) =>
  class extends Base {
    static properties = {
      language: { type: String },
    };

    constructor() {
      super();
      this.language = i18n.language;
    }

    connectedCallback() {
      super.connectedCallback();
      i18n.on('languageChanged', () => this._onLanguageChange());
    }

    _onLanguageChange() {
      if (this.language !== i18n.language) {
        this.language = i18n.language;
      }
    }
  };
