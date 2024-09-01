import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import SideMenu from "./components/SideMenu";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const games = [
    "Halo",
    "Sea of Thieves",
    "Call of Duty",
    "Minecraft",
    "Forza",
  ];

  return (
    <>
      <Navbar />
      <div className="wrapper1 debug">
        <SideMenu />
        <div className="wrapper2">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>

          {games.map((game) => (
            <Card name={game} />
          ))}

          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
