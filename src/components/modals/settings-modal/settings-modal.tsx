import { Modal, Select } from "antd";
import { useState } from "react";
import "./settings-modal.css";

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
  const [theme, setTheme] = useState("light");

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
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
          <Select.Option value="he">Hebrew</Select.Option>
        </Select>
      </div>

      <div className="settings-option">
        <label>Theme:</label>
        <Select
          className="settings-select"
          value={theme}
          onChange={handleThemeChange}
        >
          <Select.Option value="light">Light</Select.Option>
          <Select.Option value="dark">Dark</Select.Option>
        </Select>
      </div>
    </Modal>
  );
};
