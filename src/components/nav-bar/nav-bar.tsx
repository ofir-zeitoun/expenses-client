import { useAuth0 } from "@auth0/auth0-react";
import "./nav-bar.css";


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleLoginLogout = () => {
    if (isAuthenticated) {
      logout({ logoutParams: { returnTo: window.location.origin } });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <div className="nav-bar">
      <div className="left-nav">

        <img src="/src/assets/oz-mern.png" alt="Logo" className="logo" />

        <span className="app-name">Expenses Dashboard</span>
      </div>
      <div className="right-nav">
        <div className="auth-container">
          {isAuthenticated ? (
            <>
              <div className="user-photo">
                <img src="/src/assets/place-holder-user1.png" alt="Logo" />
              </div>
              <div>
                <div className="user-name">Name Surname</div>
                <span className="auth-action" onClick={handleLoginLogout}>Log out</span>
              </div>
            </>
          ) : (
            <span className="auth-action" onClick={handleLoginLogout}>Log in</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

