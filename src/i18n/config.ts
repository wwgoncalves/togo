import i18n from 'i18next';
// import translation from './en/translation.json';
import translationPt from './pt/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  // en: {
  //   translation,
  // },
  pt: {
    translation: translationPt,
  },
};

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  whitelist: ['en', 'pt'],
  nsSeparator: false,
  keySeparator: false,
  fallbackLng: false,
});
