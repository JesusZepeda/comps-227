import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <h1 style={{ textAlign: "center", paddingTop: "40px" }}>
      Current Theme: {theme.toUpperCase()}
    </h1>
  );
}

// export default Header;
