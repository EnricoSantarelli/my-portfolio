import myLogo from "../../../assets/my_logo.svg";
import { PiListBold, } from "react-icons/pi";
import "./Header.css";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext, ThemeContextType } from "../../../App";
import { useTranslation } from "react-i18next";

export default function Header() {

    // close mobile navbar logic
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);
    const divIconRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        // close mobile navbar when clicking outside of it
        document.addEventListener("click", (event) => {
            if (!navbarRef.current?.contains(event.target as Node) && !divIconRef.current?.contains(event.target as Node)) {
                setIsNavbarOpen(false);
            }
        });
    });

    // dark and light mode logic
    const { boldFontColor, containerBackgroundColor, thinFontColor } = useContext(ThemeContext) as ThemeContextType;

    // language logic
    const { t } = useTranslation();

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
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>{t("home")}</a></li>
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>{t("about")}</a></li>
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>{t("portfolio")}</a></li>
                        <li className="navbarColumnItens"><a href="" className="navbarColumnLinks" style={{ color: thinFontColor }}>{t("contact")}</a></li>
                    </ul>
                </nav>
            </div>
            <nav className="navbarHeader">
                <ul className="navbarHeaderList">
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>{t("home")}</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>{t("about")}</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>{t("portfolio")}</a></li>
                    <li className="navbarHeaderItens"><a href="" className="navbarHeaderLinks" style={{ color: thinFontColor }}>{t("contact")}</a></li>
                </ul>
            </nav>
        </header >
    );
}