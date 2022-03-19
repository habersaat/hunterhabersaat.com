import "../App.css";
import React, { useState, Component } from "react";
import BottomButton from "../BottomButton";
import "../styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Typewriter from "typewriter-effect";

export default function NHSSecret() {
    return (
        <>
            <div className="nhssnakegame">
                <div className="secrettext">
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("You found the secret...")
                                .pauseFor(2500)
                                .deleteChars(23)
                                .typeString("Beat the game, win a prize.")
                                .pauseFor(2500)
                                .deleteChars(27)
                                .typeString(
                                    "<span>Obtain a score of at least 100.</span>"
                                )
                                .start();
                        }}
                    />
                </div>
                <div className="snakegame">
                    <iframe
                        src="https://www.googlesnake.com/snakedesktop.php"
                        className="snakeembed"
                        scrolling="no"
                        height="600"
                        width="600"
                        title="Google Snake"></iframe>
                </div>
            </div>

            <footer>
                <p className="ConnectText">
                    Brought to you by bored 2021-2022 officers.
                </p>
            </footer>
        </>
    );
}
