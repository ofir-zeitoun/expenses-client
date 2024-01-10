import ConnectionHealth from './components/ConnectionHealth';
import mernLogo from "./assets/oz-mern.png";
import ozLogo from "/oz.png";
import "./App.css";

function App() {
  return (
    <>
        <div>
          <ConnectionHealth/>
          <img src={ozLogo} className="logo" alt="Ofir Zeitoun" />
          <img src={mernLogo} className="logo react" alt="MERN" />
        </div>
    </>
  );
}

export default App;
