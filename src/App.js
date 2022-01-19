import "./App.css";
import React, { useState } from "react";
import BottomButton from "./BottomButton";
import Burst from "./Burst";
import "./styles.css";
import BrokenModal from "./BrokenModal";

export default function App() {
    const [slowMo, setSlowMo] = useState(false);
    return (
        <>
            <div className="SplashPage">Hunter Habersaat</div>
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
