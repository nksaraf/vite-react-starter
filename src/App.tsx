import { useState } from "react";
import logo from "./assets/logo.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div tw="text-center">
      <header tw="bg-blueGray-700 min-h-screen flex flex-col items-center justify-center text-white">
        <img src={logo} tw="h-40 animate-spin-slow" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-blue-400"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="text-blue-400"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
