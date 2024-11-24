import { Modal } from "antd";
import { ThemeSwitcher } from "../../theme-switcher";
import { TranslationSwitcher } from "../../translation";
import "./settings-modal.css";

type SettingsModalProps = {
  visible: boolean;
  onCancel: () => void;
};

export const SettingsModal = ({ visible, onCancel }: SettingsModalProps) => {
  return (
    <Modal
      styles={{
        content: {
          backgroundColor: "var(--background-color)",
          color: "var(--text-primary)",
        },
        header: {
          backgroundColor: "var(--background-color)",
          color: "var(--text-primary)",
        },
      }}
      width={250}
      title="Settings"
      open={visible}
      onCancel={onCancel}
      maskClosable={true}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <div className="settings-option">
        <label>Language:</label>

        <TranslationSwitcher />
      </div>

      <div className="settings-option">
        <label>Theme:</label>
        <ThemeSwitcher />
      </div>
    </Modal>
  );
};
