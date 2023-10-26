import myLogo from "../../../assets/my_logo.svg";
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
        document.addEventListener("mousedown", (event) => {
            if (!navbarRef.current?.contains(event.target as Node) && !divIconRef.current?.contains(event.target as Node)) {
                setIsNavbarOpen(false);
            }
        });
    });

    //dark and light mode logic
    const { theme, toggleTheme, boldFontColor, containerBackgroundColor, thinFontColor } = useContext(ThemeContext) as ThemeContextType;

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
                </nav>
            </div>
            <nav ref={navbarRef} style={{ width: isNavbarOpen ? "144px" : "0px" }} className="navbarHeader">
                <ul className="navbarHeaderList">
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>home</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>sobre</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>portfólio</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>contato</a></li>
                </ul>
            </nav>
            <div className="modeIcon" style={{ /* color: theme == "light" ? "var(--light-background)" : "var(--dark-background)" */ }} onClick={toggleTheme}>
                <div className="sun">
                    <PiSunBold style={{ /* display: theme == "light" ? "flex" : "none", */ transform: theme == "light" ? "translateX(0)" : "translateX(50px)" }} />
                </div>
                <div className="moon" style={{ /* display: theme == "light" ? "none" : "flex",  */transform: theme == "light" ? "translateX(50px)" : "translateX(0)" }}>
                    <PiMoonBold />
                </div>

            </div>
        </header >
    );
}