import { useAuth0 } from "@auth0/auth0-react";
import { Dashboard, NavBar } from "./components";
import { QueryWrapper } from "./components/utilities";
import "./App.css";
import { useTheme } from "./components/utilities/useTheme";

function App() {
  const { isAuthenticated } = useAuth0();
  useTheme();

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
