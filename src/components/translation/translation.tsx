import { useMemo } from "react";
import { changeLanguage } from 'i18next';
import { Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { FlagIcon } from "../flag-icon";
import { LanguageOption } from "./language-option";
import './translation.css';


export const TranslationSwitcher = () => {
    const languages = useMemo(() => {

        return LanguageOption.map(lang => {
            return ({
                key: lang.key,
                icon: <FlagIcon countryCode={lang.countryCode}/>,
                label: lang.label,
                onClick: () => {
                    changeLanguage(lang.key);
                },

            })
        })
    }
        , []);

    return (
        <div className="translation">
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