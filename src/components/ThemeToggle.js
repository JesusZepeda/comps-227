import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}
// export default ThemeToggle;
