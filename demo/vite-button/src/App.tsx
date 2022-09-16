import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "@sceneui/button";
import Space from "@sceneui/space";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Space y={100} />
      <Button>确认</Button>
    </div>
  );
}

export default App;
