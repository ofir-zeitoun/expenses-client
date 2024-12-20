import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Dropdown } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { ConnectionHealth } from "../connection-health";
import { SettingsModal } from "../modals/settings-modal";
import "./nav-bar.css";

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isSettingSelected, setIsSettingSelected] = useState(false);
  const { t } = useTranslation();
  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: t("profile"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: t("settings"),
      onClick: () => {
        setIsSettingSelected(true);
      },
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: t("logout"),
      className: "menu-logout",
      onClick: () =>
        logout({ logoutParams: { returnTo: window.location.origin } }),
    },
  ];

  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <img src="/src/assets/oz-mern.png" alt="Logo" className="logo" />
          <span className="app-name">{t("app-name")}</span>
        </div>

        <div className="right-nav">
          <div className="connection-wrapper">
            <ConnectionHealth />
          </div>
          <div className="auth-container">
            {isAuthenticated ? (
              <>
                <div className="user-photo">
                  <Avatar
                    src={user?.picture}
                    icon={<UserOutlined />}
                    alt="User"
                  />
                </div>
                <div className="user-name">{user?.name || "Unknown"}</div>
                <div className="user-menu">
                  <Dropdown
                    menu={{ items }}
                    placement="bottomRight"
                    trigger={["click"]}
                  >
                    <MoreOutlined />
                  </Dropdown>
                </div>
              </>
            ) : (
              <>
                <span
                  className="user-login"
                  onClick={() => loginWithRedirect()}
                >
                  {t("login")}
                </span>
                <Dropdown
                  menu={{
                    items: items.filter((item) => item.key === "settings"),
                  }}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <MoreOutlined />
                </Dropdown>
              </>
            )}
          </div>
        </div>
      </div>
      {isSettingSelected && (
        <SettingsModal
          onCancel={() => setIsSettingSelected(false)}
          visible={isSettingSelected}
        />
      )}
    </>
  );
};
