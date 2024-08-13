import { en,he } from "./lang";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//language codes information see table at - https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
// use set 1 
i18n.use(initReactI18next).init({
        // debug: true,
        fallbackLng: "en",
        resources: {
            ...en,
            ...he,
        }
    }
);

export default i18n;