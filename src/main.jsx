import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import App from '../Test'
import "./index.css";
import Header from "./components/Header.jsx";
import { ThemeProvider } from "./Context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Header />
      <App />
    </ThemeProvider>
  </StrictMode>
);
