import "./App.css";
import React, { useState, Component } from "react";
import BottomButton from "./BottomButton";
import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Articles from "./pages/Articles";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BrokenModal from "./BrokenModal";

export default function App() {
    return (
        <>
            <div className="SplashPage">
                <Navbar />
                <Routes>
                    <Route exact path="/" component={<App />} />
                    <Route exact path="/articles" component={<Articles />} />
                    <Route exact path="/portfolio" component={<Portfolio />} />
                    <Route exact path="/about" component={<About />} />
                    <Route exact path="/contact" component={<Contact />} />
                </Routes>
                <div className="BigName">Hunter Habersaat</div>
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
