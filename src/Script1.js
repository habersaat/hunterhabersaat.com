import React, { Component } from "react";
import "./styles.css";

class Script1 extends Component {
    componentDidMount() {
        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "./js/jquery-2.1.3.min.js";
        this.div.appendChild(script1);

        const script2 = document.createElement("script");
        script2.async = true;
        script2.src = "./js/howl.js";
        this.div.appendChild(script2);

        const script3 = document.createElement("script");
        script3.async = true;
        script3.src = "./js/tween.js";
        this.div.appendChild(script3);

        const script4 = document.createElement("script");
        script4.async = true;
        script4.src = "./js/html2canvas.js";
        this.div.appendChild(script4);

        const script5 = document.createElement("script");
        script5.async = true;
        script5.src = "./dist/main.js";
        this.div.appendChild(script5);
    }
    render() {
        return (
            <div className="Scripts" ref={(el) => (this.div = el)}>
                {/* Script is inserted here */}
            </div>
        );
    }
}

export default Script1;
