import "./Home.css";
import myPhoto from "../../../assets/my_photo.png";
import { ThemeContext, ThemeContextType } from "../../../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";

export default function Home() {

    // dark and light mode logic
    const { thinFontColor } = useContext(ThemeContext) as ThemeContextType;

    // language logic
    const { t } = useTranslation();

    return (
        <main id="Home">
            <img src={myPhoto} alt="Minha foto" className="photo" />
            <div className="infos">
                <p className="secondary hi" style={{ color: thinFontColor }}>{t("hi")}</p>
                <h1 className="name">{t("presentation")}</h1>
                <p className="secondary welcome" style={{ color: thinFontColor }}>{t("welcome")}</p>
                <div className="buttons">
                    <Button title={t("more")} />
                    <Button title={t("curriculum")} onClick={() => window.open("https://drive.google.com/file/d/1HI9hJyxq9UoHkqWZbELKIoMa2BetpN9X/view?usp=sharing")} />
                </div>
            </div>
        </main>
    );
}