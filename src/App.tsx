import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import mernLogo from "./assets/oz-mern.png";
import ozLogo from "/oz.png";
import "./App.css";
import Expenses from "./components/expenses/expenses";

const queryClient = new QueryClient();
function App() {

  return (
    <>
      <div>
    <QueryClientProvider client={queryClient}>
        <Expenses/>
        <img src={ozLogo} className="logo" alt="Ofir Zeitoun" />
        <img src={mernLogo} className="logo react" alt="MERN" />
      </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
