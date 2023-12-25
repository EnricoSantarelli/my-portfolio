import { useContext } from "react";
import "./Button.css";
import { ThemeContext, ThemeContextType } from "../../../App";

type ButtonProps = {
    title: string
}

export default function Button({ title }: ButtonProps) {

    // dark and light mode logic
    const { backgroundColor, containerBackgroundColor, thinFontColor } = useContext(ThemeContext) as ThemeContextType;

    return (
        <button id="Button" style={{ backgroundColor: containerBackgroundColor }}>
            <p className="title" style={{ color: thinFontColor }}>{title}</p>
            <div className="dropColor" ><p className="titleHovered" style={{ color: backgroundColor }}>{title}</p></div>
        </button>
    );
}