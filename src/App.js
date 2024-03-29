import "./App.css";
import React, { useRef, useState, useEffect, Component } from "react";
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

    const boxRef = useRef();

    // X
    const [boxX, setboxX] = useState();

    // Y
    const [boxY, setboxY] = useState();

    // This function calculate X and Y
    const getPosition = () => {
        const boxX = boxRef.current.offsetLeft;
        setboxX(boxX);

        const boxY = boxRef.current.offsetTop;
        setboxY(boxY);
    };

    // Get the position of the red box in the beginning
    useEffect(() => {
        getPosition();
    }, []);

    // Re-calculate X and Y of the red box when the window is resized by the user
    useEffect(() => {
        window.addEventListener("resize", getPosition);
    }, []);

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
        window.addEventListener("click", function (e) {
            getPosition();
            const coords = { x: e.pageX, y: e.pageY };
            if (
                e.pageX < boxX - 100 ||
                e.pageX > boxX + 330 + 100 ||
                e.pageY < boxY - 100 ||
                e.pageY > boxY + 130 + 100
            ) {
                createWave(coords);
            }
        });
    });

    const scrollref = useRef(null);

    const handleScroll = () => {
        //scrollref.current?.scrollIntoView({ behavior: "smooth" });
        const coords = { x: boxX + 165, y: 2000 };

        const MAIN_OPTS = {
            count: 3,
            radius: 0,
            degree: 0,
        };

        const CHILD_OPTS = {
            stroke: ["#FC2D79", "#11CDC5", "white"],
            fill: "none",
            duration: 400,
            scale: 1,
            radius: 35,
            radiusY: { 0: 35 },
            strokeWidth: 3,
            duration: 800,
            delay: "stagger(125)",
        };

        const vertLine = new mojs.Burst({
            ...MAIN_OPTS,
            x: -1,

            children: {
                ...CHILD_OPTS,
                shape: "line",
                radius: 35,
                scaleX: { 0: 1 },
                left: -35,
                top: 35,
                origin: "100% 50%",
            },
        });

        const horLine = new mojs.Burst({
            ...MAIN_OPTS,
            angle: 90,
            y: -50,

            children: {
                ...CHILD_OPTS,
                shape: "line",
                radius: 20,
                radiusX: { 0: 20 },
                delay: "stagger(800, 125)",
            },
        });

        const o = new mojs.Burst({
            ...MAIN_OPTS,
            width: 10,
            height: 10,

            children: {
                ...CHILD_OPTS,
                delay: "stagger(650, 125)",
            },
        });

        const timeline = new mojs.Timeline().add(o, vertLine, horLine);

        //o.tune(coords);
        //vertLine.tune(coords);
        //horLine.tune(coords);

        timeline.replay();
    };

    return (
        <>
            <div className="SplashPage">
                <Fader text={splashText} fadeinterval={2000}></Fader>
                <div
                    id="js-show-modal"
                    class="launch-button"
                    ref={boxRef}
                    onClick={handleScroll}>
                    launch
                    <div class="launch-button__glare"></div>
                </div>
            </div>
            <div className="whoami">
                <h2 ref={scrollref}>X: {boxX ?? "No Result"}</h2>
                <h2>Y: {boxY ?? "No Result"}</h2>
            </div>
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
