import ptLightLogo from "../../../assets/pt_light_logo.svg";
import ptDarkLogo from "../../../assets/pt_dark_logo.svg";
import enLightLogo from "../../../assets/en_light_logo.svg";
import enDarkLogo from "../../../assets/en_dark_logo.svg";
import "./Switcher.css";
import { PiMoonBold, PiSunBold } from "react-icons/pi";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../../App";
import { useTranslation } from "react-i18next";
import "../../../../i18n";

export default function Switcher() {

    // change language logic
    const [language, setLanguage] = useState("pt");
    const { i18n } = useTranslation();
    const toggleFlag = () => {
        setLanguage((currentlanguage) => {
            const languageToChange = currentlanguage == "pt" ? "en" : "pt";
            i18n.changeLanguage(languageToChange);
            return languageToChange;
        });
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
            <div className="modeIcon" onClick={toggleFlag} >
                <div className="flag" style={{ opacity: language == "pt" ? 1 : 0, transform: language == "pt" ? "translateX(0)" : "translateX(-50px)" }}>
                    <img className="flagImage" src={ptLightLogo} style={{ opacity: theme == "light" ? 1 : 0 }} alt="Logo Brasil" />
                    <img className="flagImage" src={ptDarkLogo} style={{ opacity: theme == "light" ? 0 : 1 }} alt="Logo Brasil" />
                </div>
                <div className="flag" style={{ opacity: language == "pt" ? 0 : 1, transform: language == "pt" ? "translateX(50px)" : "translateX(0)" }}>
                    <img className="flagImage" src={enLightLogo} style={{ opacity: theme == "light" ? 1 : 0 }} alt="Logo Estados Unidos" />
                    <img className="flagImage" src={enDarkLogo} style={{ opacity: theme == "light" ? 0 : 1 }} alt="Logo Estados Unidos" />
                </div>
            </div>
        </div >
    );
}