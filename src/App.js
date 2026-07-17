import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        background: theme === "light" ? "#f5f5f5" : "#1a1a1a",
        color: theme === "light" ? "#000" : "#fff",
        transition: "0.3s",
      }}
    >
      <Header />
      <ThemeToggle />
    </div>
  );
}

export default App;
