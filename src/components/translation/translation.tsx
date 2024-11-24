import { useMemo } from "react";
import { Dropdown } from "antd";
import { changeLanguage } from "i18next";
import { GlobalOutlined } from "@ant-design/icons";
import { LanguageOption } from "./language-option";
import "./translation.css";
import { useTextDirection } from "../utilities/useTextDirection";
import { FlagIcon } from "../flag-icon";
import { useLanguages } from "./use-languages";

export const TranslationSwitcher = () => {
  const changeDirWithLanguage = useTextDirection();
  const { currentLanguage } = useLanguages();

  const languages = useMemo(() => {
    return LanguageOption.map((lang) => {
      return {
        key: lang.key,
        icon: <FlagIcon countryCode={lang.countryCode} />,
        label: lang.label,
        onClick: () => {
          changeLanguage(lang.key);
          changeDirWithLanguage(lang.key);
        },
      };
    });
  }, [changeDirWithLanguage]);

  return (
    <div className="translation">
      {currentLanguage}
      <Dropdown
        menu={{ items: languages }}
        placement="bottomRight"
        trigger={["click"]}
      >
        <GlobalOutlined />
      </Dropdown>
    </div>
  );
};
