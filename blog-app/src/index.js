import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeContext from "./context";

function Main() {
  const [theme, setTheme] = useState("light");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <App />
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
