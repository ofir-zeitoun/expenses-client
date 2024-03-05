
import "./App.css";

import Expenses from "./components/expenses/expenses";
import { Header } from "./components/header";
import { QueryWrapper } from "./components/utilities/query-wrapper";
import { ConnectionHealth } from "./components/connection-health";
import NavBar from "./components/nav-bar/nav-bar";
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isAuthenticated } = useAuth0();

  


  return (
    <>
      <QueryWrapper>
      <NavBar />
        <div>
          <ConnectionHealth />
          {isAuthenticated ? (
        <>
          <Header />
          <Expenses />
        </>
      ) : (
        <b>Please Login to see the expenses lists</b>
      )}
        </div>
      </QueryWrapper>
      </>
  );
}

export default App;
