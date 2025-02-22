import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
import { en } from './locales/en';
import { es } from './locales/es';

i18n.use(LanguageDetector).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

export default i18n;
