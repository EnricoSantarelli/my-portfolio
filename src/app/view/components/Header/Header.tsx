import myLogo from "../../../assets/my_logo.svg";
import brLightLogo from "../../../assets/br_light_logo.svg";
import brDarkLogo from "../../../assets/br_dark_logo.svg";
import usLightLogo from "../../../assets/us_light_logo.svg";
import usDarkLogo from "../../../assets/us_dark_logo.svg";
import { PiListBold, PiSunBold, PiMoonBold } from "react-icons/pi";
import "./Header.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../../App";

export default function Header() {

    // close mobile navbar logic
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);
    const divIconRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // close mobile navbar when clicking outside of it
        document.addEventListener("click", (event) => {
            console.log(navbarRef.current);
            if (!navbarRef.current?.contains(event.target as Node) && !divIconRef.current?.contains(event.target as Node)) {
                setIsNavbarOpen(false);
            }
        });
    });

    // dark and light mode logic
    const { theme, toggleTheme, boldFontColor, containerBackgroundColor, thinFontColor } = useContext(ThemeContext) as ThemeContextType;

    // change flag logic
    const [flag, setFlag] = useState("br");
    const toggleFlag = () => {
        setFlag((currentFlag) => currentFlag == "br" ? "us" : "br");
    };

    return (
        <header id="Header">
            <div className="headerLeft">
                <img className="myLogo" src={myLogo} alt="Logo Enrico Santarelli" />
                <h1 className="myName">Enrico Santarelli</h1>
                <div ref={divIconRef} style={{ transform: isNavbarOpen ? "scaleX(1.5)" : "scaleX(1)", color: boldFontColor }} className="divIcon" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                    <PiListBold />
                </div>
                <nav ref={navbarRef} style={{ width: isNavbarOpen ? "144px" : "0px", backgroundColor: containerBackgroundColor }} className="navbarColumn">
                    <ul className="navbarColumnList">
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>home</a></li>
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>sobre</a></li>
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>portfólio</a></li>
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>contato</a></li>
                    </ul>
                    <nav className="navbarRight">
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
                    </nav>
                </nav>
            </div>
            <nav className="navbarHeader">
                <ul className="navbarHeaderList">
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>home</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>sobre</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>portfólio</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>contato</a></li>
                </ul>
            </nav>
            <div className="headerRight">
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
        </header >
    );
}