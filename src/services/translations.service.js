import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../static/data/translations/en.US.json';
import translationIT from '../static/data/translations/it.IT.json';


const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};


const TranslationsService = () => {
  const translations = i18n;

  const init = () => translations.use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      keySeparator: '.',
      interpolation: {
        escapeValue: false,
      },
    });
  init();

  const t = (stringCode) => translations.t(stringCode);
  const otherLanguage = () => (translations.language === 'it' ? 'en' : 'it');

  const switchLanguage = () => {
    translations.changeLanguage(otherLanguage());
  };

  return {
    t, otherLanguage, switchLanguage,
  };
};


export default TranslationsService;
