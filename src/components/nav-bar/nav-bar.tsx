import { useAuth0 } from "@auth0/auth0-react";
import "./nav-bar.css";
import { Avatar, Dropdown } from "antd";
import { UserOutlined, SettingOutlined, LogoutOutlined, MoreOutlined } from '@ant-design/icons';
// import { useQuery } from "@tanstack/react-query";
// const fetchUserData = async () => {
//   const response = await fetch('/api/user');
//   if (!response.ok) throw new Error('Network response was not ok');
//   return response.json();
// };

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  // const { data: user } = useQuery({
  //   queryKey: ['user'],
  //   queryFn: fetchUserData,
  //   enabled: !!isAuthenticated,
  // });

  const handleLoginLogout = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  const items = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    isAuthenticated ? {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Log out',
      style: { color: 'red' },
      onClick: handleLoginLogout,
    } : null,
  ].filter(item => item !== null);

  return (
    <div className="navbar">
      <div className="left-nav">

        <img src="/src/assets/oz-mern.png" alt="Logo" className="logo" />

        <span className="app-name">Expenses Dashboard</span>
      </div>
      <div className="right-nav">
        <div className="auth-container">
          {isAuthenticated ? (
            <>
              <div className="user-photo">
                <Avatar src={user?.picture || "/src/assets/place-holder-user1.png"} alt="User" />
              </div>

              <div className="user-name">{user?.name || "John Doe"}</div>
              <div className="user-menu">
                <Dropdown menu={{ items }} placement="bottomRight" trigger={['click']}>
                  <MoreOutlined />
                </Dropdown>
              </div>
            </>
          ) : (
            <>
              <span className="user-login" onClick={handleLoginLogout}>Log In</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
