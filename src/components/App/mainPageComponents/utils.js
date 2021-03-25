import { langText } from './lang';

export const getLabelsByLanguage = (lang) => {
  return langText[lang] === undefined ? langText.ru : langText[lang];
};
