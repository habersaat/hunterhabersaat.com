import "./App.css";
import React, { useState, useEffect, Component } from "react";
import BottomButton from "./BottomButton";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Fader from "./Components/Fader";

const createWave = (coords) => {
    const circle = {
        left: 0,
        top: 0,
        radius: { 0: 100 },
        fill: "none",
        stroke: "#ffffff",
        delay: 50,
        opacity: { 0.6: 0 },
        duration: 1500,
    };

    const circleShape1 = new mojs.Shape({
        ...circle,
    });

    const circleShape2 = new mojs.Shape({
        ...circle,
        raius: { 0: 200 },
        duration: 800,
    });

    const circleShape3 = new mojs.Shape({
        ...circle,
        raius: { 0: 150 },
        duration: 1000,
    });

    const timeline = new mojs.Timeline().add(
        circleShape1,
        circleShape2,
        circleShape3
    );

    circleShape1.tune(coords);
    circleShape2.tune(coords);
    circleShape3.tune(coords);

    timeline.replay();
};

export default function App() {
    const [splashText, setSplashText] = useState("");

    useEffect(() => {
        let r_text = new Array();
        r_text[0] = "What is this place?";
        r_text[1] = "[Don't] click the button";
        r_text[2] = "An Empty Page?";
        r_text[3] = "Try clicking the button";

        var i = Math.floor(r_text.length * Math.random());
        setSplashText(r_text[i]);
    }, []);

    useEffect(() => {
        document.addEventListener("click", function (e) {
            const coords = { x: e.pageX, y: e.pageY };
            createWave(coords);
        });
    });

    return (
        <>
            <div className="SplashPage">
                <Fader text={splashText} fadeinterval={3000}></Fader>
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
