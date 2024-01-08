import mernLogo from "./assets/oz-mern.png";
import ozLogo from "/oz.png";
import { ExpansesHeader } from "./expanses/expanses-header";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <ExpansesHeader />
        <img src={ozLogo} className="logo" alt="Ofir Zeitoun" />
        <img src={mernLogo} className="logo react" alt="MERN" />
      </div>
    </>
  );
}

export default App;
