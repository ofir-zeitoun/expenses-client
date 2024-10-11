import { Modal, Select } from "antd";
import { useState } from "react";
import "./settings-modal.css";
import { useTheme } from "../../utilities/useTheme";
import { useTextDirection } from "../../utilities/useTextDirection";
import { changeLanguage } from "i18next";

type SettingsModalProps = {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
};

export const SettingsModal = ({
  visible,
  onOk,
  onCancel,
}: SettingsModalProps) => {
  const [language, setLanguage] = useState("en");
  const [currentTheme, , toggleTheme] = useTheme();

  const changeDirWithLanguage = useTextDirection();

  const handleThemeChange = (value: string) => {
    if (value === "dark" && currentTheme === "light") {
      toggleTheme();
    } else if (value === "light" && currentTheme === "dark") {
      toggleTheme();
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    changeLanguage(value);
    changeDirWithLanguage(value);
  };

  return (
    <Modal
      title="Settings"
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      maskClosable={false}
    >
      <div className="settings-option">
        <label>Language:</label>
        <Select
          className="settings-select"
          value={language}
          onChange={handleLanguageChange}
        >
          <Select.Option value="en">English</Select.Option>
          <Select.Option value="he">עברית</Select.Option>
        </Select>
      </div>

      <div className="settings-option">
        <label>Theme:</label>
        <Select
          className="settings-select"
          value={currentTheme}
          onChange={handleThemeChange}
        >
          <Select.Option value="light">Light</Select.Option>
          <Select.Option value="dark">Dark</Select.Option>
        </Select>
      </div>
    </Modal>
  );
};
