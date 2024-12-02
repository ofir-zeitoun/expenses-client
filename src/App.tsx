import { useAuth0 } from "@auth0/auth0-react";
import { Dashboard, NavBar } from "./components";
import { QueryWrapper, useTheme } from "./components/utilities";
import "./App.css";
import i18n from "./services/translation";

function App() {
  const { isAuthenticated } = useAuth0();
  useTheme();
  console.log("i18n-direction", i18n.dir());

  return (
    <QueryWrapper>
      <NavBar />
      <div className="main-content">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <b>Please Login to see the expenses lists</b>
        )}
      </div>
    </QueryWrapper>
  );
}

export default App;
