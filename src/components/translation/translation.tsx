import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { changeLanguage } from 'i18next';
import './translation.css';
import { useTextDirection } from '../utilities/useTextDirection';

export const TranslationSwitcher = () => {
    const [changeDirWithLanguage] = useTextDirection();
    const items = [
        {
            key: "en",
            icon: <GlobalOutlined />,
            label: "English",
            onClick: () => {
                changeLanguage('en');
                changeDirWithLanguage('en');
            },

        },
        {
            key: "he",
            icon: <GlobalOutlined />,
            label: "Hebrew",
            onClick: () => {
                changeLanguage('he');
                changeDirWithLanguage('he');
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