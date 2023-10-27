import brLightLogo from "../../../assets/br_light_logo.svg";
import brDarkLogo from "../../../assets/br_dark_logo.svg";
import usLightLogo from "../../../assets/us_light_logo.svg";
import usDarkLogo from "../../../assets/us_dark_logo.svg";
import "./Switcher.css";
import { PiMoonBold, PiSunBold } from "react-icons/pi";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../../App";

export default function Switcher() {

    // change flag and language logic
    const [flag, setFlag] = useState("br");
    const toggleFlag = () => {
        setFlag((currentFlag) => currentFlag == "br" ? "us" : "br");
    };

    // dark and light mode logic
    const { toggleTheme, theme, backgroundColor } = useContext(ThemeContext) as ThemeContextType;

    return (
        <div id="Switcher" style={{ backgroundColor: backgroundColor }}>
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
    );
}