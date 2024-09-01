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
    "Roblox",
    "Elden Ring",
    "Fortnite",
    "Valorant",
    "Rocket League",
    "Destiny 2",
    "Overwatch",
    "League of Legends",
  ];

  return (
    <>
      <Navbar />
      <div className="wrapper1 debug">
        <SideMenu />
        <div className="wrapper2">
          <h3>Search Bar</h3>
          <div className="cardWrapper">
            {games.map((game) => (
              <Card name={game} />
            ))}
          </div>

          {/* <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button> */}
        </div>
      </div>
    </>
  );
}

export default App;
