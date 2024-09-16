import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { changeLanguage } from 'i18next';
import { LanguageOption } from "./language-option";
import './translation.css';
import { useTextDirection } from '../utilities/useTextDirection';
import { useMemo } from "react";
import { FlagIcon } from "../flag-icon";


export const TranslationSwitcher = () => {
    const changeDirWithLanguage = useTextDirection();
    const items = useMemo(() => {

        return LanguageOption.map(lang => {
            return ({
                key: lang.key,
                icon: <FlagIcon countryCode={lang.countryCode}/>,
                label: lang.label,
                onClick: () => {
                    changeLanguage(lang.key);
                    changeDirWithLanguage(lang.key);
                },

            })
        })
    }
        , []);

    return (
        <div className="translation">
            <Dropdown
                menu={{ items }}
                placement="bottomRight"
                trigger={["click"]}
            >
                <GlobalOutlined />
            </Dropdown>
        </div>
    );
};