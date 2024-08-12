import './translation.css';
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { changeLanguage } from 'i18next';
import { useTextDirection } from '../utilities/useTextDirection';

export const TranslationSwitcher = () => {
    const { t } = useTranslation();
    const [,handleSetDir ] = useTextDirection();
    const items = [
        {
            key: "en",
            textDirection: 'ltr',
            icon: <GlobalOutlined />,
            label: "English",
            onClick: () => {
                changeLanguage('en');
                handleSetDir('ltr');
            },

        },
        {
            key: "he",
            textDirection: 'rtl',
            icon: <GlobalOutlined />,
            label: "Hebrew",
            onClick: () => {
                changeLanguage('he');
                handleSetDir('rtl');
            },
        },
    ];

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