import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '@locale/locales/en.json';
import ruTranslation from '@locale/locales/ru.json';
import ukTranslation from '@locale/locales/uk.json';

const resources = {
  en: { translation: enTranslation },
  ru: { translation: ruTranslation },
  uk: { translation: ukTranslation },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;