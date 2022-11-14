import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
import { ThemeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("light-theme");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="container">
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Pages />
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
