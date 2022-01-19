import "./App.css";
import React, { useState } from "react";
import Button from "./Button";
import Burst from "./Burst";
import "./styles.css";
import BrokenModal from "./BrokenModal";

export default function App() {
    return (
        <>
            <BrokenModal />
            <burst />
            <div className="SplashPage">FirstName LastName</div>
            <footer>
                <p>Connect with me:</p>
                <Button
                    onClick={() =>
                        (window.location.href =
                            "https://www.linkedin.com/in/Username/")
                    }>
                    Linkedin
                </Button>
                <Button
                    onClick={() =>
                        (window.location.href = "https://github.com/Username")
                    }>
                    Github
                </Button>
            </footer>
        </>
    );
}
