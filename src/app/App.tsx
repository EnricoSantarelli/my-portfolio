import { createContext, useState } from "react";
import Header from "./view/components/Header/Header";
import brLightLogo from "../app/assets/br_light_logo.svg";
import brDarkLogo from "../app/assets/br_dark_logo.svg";
import usLightLogo from "../app/assets/us_light_logo.svg";
import usDarkLogo from "../app/assets/us_dark_logo.svg";
import { PiMoonBold, PiSunBold } from "react-icons/pi";

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

  // change flag and language logic
  const [flag, setFlag] = useState("br");
  const toggleFlag = () => {
    setFlag((currentFlag) => currentFlag == "br" ? "us" : "br");
  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme, backgroundColor, containerBackgroundColor, boldFontColor, thinFontColor }}>
      <div className="headerRight" style={{ backgroundColor: backgroundColor }}>
        <div className="modeIcon" onClick={toggleTheme}>
          <div className="sun" style={{ opacity: theme == "light" ? 1 : 0, transform: theme == "light" ? "translateX(0)" : "translateX(-50px)" }}>
            <PiSunBold />
          </div>
          <div className="moon" style={{ opacity: theme == "light" ? 0 : 1, transform: theme == "light" ? "translateX(50px)" : "translateX(0)" }}>
            <PiMoonBold />
          </div>
        </div>
        <div className="modeIcon" onClick={toggleFlag}>
          <div className="flag" style={{ opacity: flag == "br" ? 1 : 0, transform: flag == "br" ? "translateX(0)" : "translateX(-50px)" }}>
            <img className="flagImage" src={brLightLogo} style={{ opacity: theme == "light" ? 1 : 0 }} alt="Logo Brasil" />
            <img className="flagImage" src={brDarkLogo} style={{ opacity: theme == "light" ? 0 : 1 }} alt="Logo Brasil" />
          </div>
          <div className="flag" style={{ opacity: flag == "br" ? 0 : 1, transform: flag == "br" ? "translateX(50px)" : "translateX(0)" }}>
            <img className="flagImage" src={usLightLogo} style={{ opacity: theme == "light" ? 1 : 0 }} alt="Logo Estados Unidos" />
            <img className="flagImage" src={usDarkLogo} style={{ opacity: theme == "light" ? 0 : 1 }} alt="Logo Estados Unidos" />
          </div>
        </div>
      </div>
      <div className="App" style={{ background: backgroundColor }}>
        <div className="container">
          <Header />

        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;