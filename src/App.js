import "./App.css";
import React, { useState } from "react";
import BottomButton from "./BottomButton";
import "./styles.css";

export default function App() {
    const [slowMo, setSlowMo] = useState(false);
    return (
        <>
            <div className="SplashPage">
            <div class="highlightTextOut">
                <a alt="HOME">HOME</a>
                <a alt="ARTICLES">ARTICLES</a>
                <a alt="PORTFOLIO">PORTFOLIO</a>
                <a alt="ABOUT">ABOUT</a>
                <a alt="CONTACT">CONTACT</a>
            </div>
                Hunter Habersaat
                </div>
            <div className="whoami">This is some filler text for now.</div>
            <footer>
                <p className="ConnectText">Connect with me:</p>
                <BottomButton
                    onClick={() =>
                        (window.location.href =
                            "https://www.linkedin.com/in/habersaat/")
                    }>
                    Linkedin
                </BottomButton>
                <BottomButton
                    onClick={() =>
                        (window.location.href = "https://github.com/habersaat")
                    }>
                    Github
                </BottomButton>
            </footer>
        </>
    );
}
