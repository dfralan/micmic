import english from './en.json';
import spanish from './es.json';
//import { localesConfig } from '/loom.config';

const loomTranslations = {};

Object.keys(english).forEach((key) => {
  loomTranslations[eval(`[english.${key}]`)] = {
    en: english[key],
    es: spanish[key],
  };
});

export default loomTranslations;
