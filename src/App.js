import "./App.css";

import React, { useState } from "react";
import MojsExample from "./MojsExample";
import Button from "./Button";
import Burst from "./Burst";
import "./styles.css";

export default function App() {
    const [slowMo, setSlowMo] = useState(false);
    return (
        <>
            <burst></burst>
            <div className="SplashPage">Hunter Habersaat</div>
            <footer>
                <p>Connect with me:</p>
                <Button
                    onClick={() =>
                        (window.location.href =
                            "https://www.linkedin.com/in/habersaat/")
                    }>
                    Linkedin
                </Button>
                <Button
                    onClick={() =>
                        (window.location.href = "https://github.com/habersaat")
                    }>
                    Github
                </Button>
            </footer>
        </>
    );
}
