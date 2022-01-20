import "../App.css";
import React, { useState, Component } from "react";
import BottomButton from "../BottomButton";
import "../styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Contact() {
    return (
        <>
            <div className="ContactPage">Contact</div>
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
