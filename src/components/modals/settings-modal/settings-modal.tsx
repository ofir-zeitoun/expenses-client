import { Modal } from "antd";
import { ThemeSwitcher } from "../../theme-switcher";
import { TranslationSwitcher } from "../../translation";
import "./settings-modal.css";
import { useTranslation } from "../../translation/use-translation";

type SettingsModalProps = {
  visible: boolean;
  onCancel: () => void;
};

export const SettingsModal = ({ visible, onCancel }: SettingsModalProps) => {
  const { t } = useTranslation();
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
      title={t(`settings`)}
      open={visible}
      onCancel={onCancel}
      maskClosable={true}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <div className="settings-option">
        <label>{t(`language`)}:</label>

        <TranslationSwitcher />
      </div>

      <div className="settings-option">
        <label>{t(`theme`)}:</label>
        <ThemeSwitcher />
      </div>
    </Modal>
  );
};
