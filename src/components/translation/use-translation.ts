import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation as useI18n } from "react-i18next";
import { LanguageOption } from "./language-option";

export const useTranslation = () => {
  const { t, i18n } = useI18n();
  const [language, setLanguage] = useState(i18n.language);
  const i18nLanguage = i18n.language.split("-")[0];

  const currentLanguage = useMemo(
    () =>
      LanguageOption.find((lang) => lang.key === i18nLanguage)?.label ||
      LanguageOption[0].label,
    [i18nLanguage]
  );

  const changeLanguage = useCallback(
    (language: string) => {
      setLanguage(language);
    },
    [setLanguage]
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    document.body.dir = i18n.dir(language);
  }, [language, i18n]);

  return { t, currentLanguage, changeLanguage };
};
