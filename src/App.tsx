import mernLogo from "./assets/oz-mern.png";
import ozLogo from "/oz.png";
import "./App.css";
import Expenses from "./components/expenses/expenses";
import Header from './components/header/header';
import { QueryWrapper } from "./components/utilities/query-wrapper";


function App() {

  return (
    <>
    <QueryWrapper>
      <div>
      <Header/>
        <Expenses/>
        <img src={ozLogo} className="logo" alt="Ofir Zeitoun" />
        <img src={mernLogo} className="logo react" alt="MERN" />
      </div>
      </QueryWrapper>
    </>
  );
}

export default App;
