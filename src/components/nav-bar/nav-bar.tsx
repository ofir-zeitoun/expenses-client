import { Avatar, Dropdown } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { ConnectionHealth } from "../connection-health";
import "./nav-bar.css";

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Log out",
      className: "menu-logout",
      onClick: () =>
        logout({ logoutParams: { returnTo: window.location.origin } }),
    },
  ];

  return (
    <div className="navbar">
      <div className="left-nav">
        <img src="/src/assets/oz-mern.png" alt="Logo" className="logo" />
        <span className="app-name">Expenses Dashboard</span>
      </div>
      <div className="right-nav">
        <div className="ConnectionHealth">
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
              <span className="user-login" onClick={() => loginWithRedirect()}>
                Log In
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
