import { useMemo } from "react";
import { Dropdown } from "antd";
import { changeLanguage } from 'i18next';
import { GlobalOutlined } from "@ant-design/icons";
import { LanguageOption } from "./language-option";
import './translation.css';
import { useTextDirection } from '../utilities/useTextDirection';
import { FlagIcon } from "../flag-icon";
import i18n from "../../services/translation";

export const TranslationSwitcher = () => {
  const changeDirWithLanguage = useTextDirection();
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
  }, []);
  {
    console.log(`i18n.language: ${i18n.language}`);
    console.log("LanguageOption: ", LanguageOption);
  }

  return (
    <div className="translation">
      {
        LanguageOption.filter(
          (lang) => lang.key === i18n.language.split("-")[0]
        )[0].label
      }
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