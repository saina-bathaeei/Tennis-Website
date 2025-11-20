import i18n from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import farsi from './../Language/fa/fa.json'
import english from './../Language/en/en.json'


console.log(english)

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    returnObjects: true,
    resources: {
        en: {
            translation: english,
        },
        fa: {
            translation: farsi,
        },
    }
})