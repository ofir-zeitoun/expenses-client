import { en } from "./lang";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
        debug: true,
        fallbackLng: "en",
        resources: {
            ...en,
        }
    }
);

export default i18n;