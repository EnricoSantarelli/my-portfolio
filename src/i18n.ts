import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslation from "./app/locales/pt/pt.json";
import enTranslation from "./app/locales/en/en.json";

export default i18n
  .use(initReactI18next)
  .init({
    lng: "pt",
    fallbackLng: "pt",
    resources: {
        en: {
            translation: enTranslation
        },
        pt: {
            translation: ptTranslation
        }
    },
    interpolation: {
      escapeValue: false
    }
  });