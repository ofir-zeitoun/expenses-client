import { useMemo } from "react";

import { Dropdown } from "antd";

import { GlobalOutlined } from "@ant-design/icons";
import { LanguageOption } from "./language-option";
import "./translation.css";
import { useTextDirection } from "../utilities/useTextDirection";
import { FlagIcon } from "../flag-icon";
import { useTranslation } from "./use-translation";

export const TranslationSwitcher = () => {
  const changeDirWithLanguage = useTextDirection();
  const { currentLanguage, changeLanguage } = useTranslation();

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
  }, [changeDirWithLanguage, changeLanguage]);

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
