import { useEffect, useState } from "react";
import { Avatar, Dropdown, Modal, Form, Input, Button, message } from "antd";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { apiFetch } from "../../api";
import { ConnectionHealth } from "../connection-health";
import { ThemeSwitcher } from "../theme-switcher";
import { NavBarProps } from "../../@types/nav-bar-props";
import "./nav-bar.css";

export const NavBar = ({ setIsUserAuthenticated }: NavBarProps) => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const checkUserInDB = async () => {
      if (isAuthenticated && user) {
        const token = await getAccessTokenSilently();
        try {
          const response = await apiFetch("/api/users/check", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          if (!data.exists) {
            form.setFieldsValue({
              name: user.name,
              phone: "",
              picture: user.picture,
              email: user.email,
            });
            setIsModalVisible(true);
            setIsUserAuthenticated(false);
          } else {
            setIsUserAuthenticated(true);
          }
        } catch (error) {
          console.error("Failed to check user in DB:", error);
          message.error("Failed to check user in DB");
        }
      }
    };

    checkUserInDB();
  }, [
    isAuthenticated,
    user,
    getAccessTokenSilently,
    form,
    setIsUserAuthenticated,
  ]);

  const handleRegister = async () => {
    try {
      const values = await form.validateFields();
      const token = await getAccessTokenSilently();

      const response = await apiFetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...values, auth0Id: user?.sub }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      message.success("User registered successfully");
      setIsUserAuthenticated(true);
      setIsModalVisible(false);
    } catch (error) {
      console.error("Failed to register user:", error);
      message.error("Failed to register user");
    }
  };

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
    <>
      <div className="navbar">
        <div className="left-nav">
          <img src="/src/assets/oz-mern.png" alt="Logo" className="logo" />
          <span className="app-name">Expenses Dashboard</span>
        </div>
        <ThemeSwitcher />
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
                  Log In
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        title="Register"
        visible={isModalVisible}
        onOk={handleRegister}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleRegister}>
            Register
          </Button>,
        ]}
      >
        <p>User not found in the system. Please register.</p>
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
          <Form.Item
            name="picture"
            label="Picture"
            rules={[
              { required: false, message: "Please enter your picture URL" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input disabled />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
