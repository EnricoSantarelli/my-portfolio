import { createContext, useState } from "react";
import Header from "./view/components/Header/Header";
import Switcher from "./view/components/Switcher/Switcher";
import Home from "./view/components/Home/Home";

export type ThemeContextType = {
  theme: string,
  toggleTheme: () => void,
  backgroundColor: string,
  containerBackgroundColor: string,
  boldFontColor: string,
  thinFontColor: string,
}

type ThemeInfo = {
  backgroundColor: string;
  containerBackgroundColor: string;
  boldFontColor: string;
  thinFontColor: string;
}

const themes: Record<string, ThemeInfo> = {
  "light": {
    backgroundColor: "var(--light-background)",
    containerBackgroundColor: "var(--light-container)",
    boldFontColor: "var(--light-bold-font)",
    thinFontColor: "var(--light-thin-font)",
  },
  "dark": {
    backgroundColor: "var(--dark-background)",
    containerBackgroundColor: "var(--dark-container)",
    boldFontColor: "var(--dark-bold-font)",
    thinFontColor: "var(--dark-thin-font)",
  },
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

function App() {

  //dark and light mode logic
  const [theme, setTheme] = useState<string>("light");
  const [backgroundColor, setBackgroundColor] = useState<string>(themes.light.backgroundColor);
  const [containerBackgroundColor, setContainerBackgroundColor] = useState<string>(themes.light.containerBackgroundColor);
  const [boldFontColor, setBoldFontColor] = useState<string>(themes.light.boldFontColor);
  const [thinFontColor, setThinFontColor] = useState<string>(themes.light.thinFontColor);

  const toggleTheme = () => {
    const newTheme: string = theme === "light" ? "dark" : "light";
    const selectedThemeInfo = themes[newTheme];

    setBackgroundColor(selectedThemeInfo.backgroundColor);
    setContainerBackgroundColor(selectedThemeInfo.containerBackgroundColor);
    setBoldFontColor(selectedThemeInfo.boldFontColor);
    setThinFontColor(selectedThemeInfo.thinFontColor);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, backgroundColor, containerBackgroundColor, boldFontColor, thinFontColor }}>
      <div className="App" style={{ background: backgroundColor }}>
        <div className="container">
          <section style={{ background: backgroundColor }}>
            <Switcher />
            <Header />
            <Home />
          </section>
          <section className="two"></section>
          <section className="three"></section>
        </div>
      </div>

    </ThemeContext.Provider >
  );
}

export default App;