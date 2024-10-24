import { Modal } from "antd";
import "./settings-modal.css";
import { ThemeSwitcher } from "../../theme-switcher";
import { TranslationSwitcher } from "../../translation";

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
 
  return (
    <Modal
      width={250}
      title="Settings"
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      maskClosable={true}
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
