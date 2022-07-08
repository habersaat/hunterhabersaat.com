import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css";

const Fader = ({ text, fadeinterval }) => {
    const [fadeProp, setFadeProp] = useState({
        fade: "fade-out",
    });

    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === "fade-in") {
                setFadeProp({
                    fade: "fade-in",
                });
            } else {
                setFadeProp({
                    fade: "fade-in",
                });
            }
        }, fadeinterval);

        return () => clearInterval(timeout);
    }, [fadeProp]);

    return <h1 className={fadeProp.fade}>{text}</h1>;
};

Fader.defaultProps = {
    text: "Hello there",
};

Fader.PropTypes = {
    text: PropTypes.string,
};

export default Fader;
