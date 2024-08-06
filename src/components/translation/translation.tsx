import './translation.css';
import { useTranslation } from "react-i18next";
import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { changeLanguage } from 'i18next';

export const Translation = () => {
    const { t } = useTranslation();
    const items = [
        {
            key: "en",
            icon: <GlobalOutlined />,
            label: "English",
            onClick: () =>
                changeLanguage('en'),
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