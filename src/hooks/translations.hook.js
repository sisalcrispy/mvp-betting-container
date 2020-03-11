import React from 'react';
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

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

const UseTranslations = () => {
  const t = (stringCode) => i18n.t(stringCode);
  const getOtherLanguage = () => (i18n.language === 'it' ? 'en' : 'it');
  const [reload, setReload] = React.useState(0);

  React.useEffect(() => {}, [reload]);

  const switchLanguage = () => {
    i18n.changeLanguage(getOtherLanguage());
    setReload(r => r + 1);
  };

  return {
    t, getOtherLanguage, switchLanguage,
  };
};


export default UseTranslations;
