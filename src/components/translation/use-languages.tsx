import { useMemo } from "react";
import { LanguageOption } from "./language-option";
import { useTranslation } from "react-i18next";

export const useLanguages = () => {
  const { i18n } = useTranslation();

  const i18nLanguage = i18n.language.split("-")[0];

  const currentLanguage = useMemo(
    () =>
      LanguageOption.find(
        (lang) => lang.key === i18nLanguage)?.label || LanguageOption[0].label,
    [i18nLanguage]
  );

  return { currentLanguage };
};
