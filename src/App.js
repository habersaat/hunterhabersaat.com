import "./App.css";
import React, { useState } from "react";
import MojsExample from "./MojsExample";
import Button from "./Button";
import Burst from "./Burst";
import "./styles.css";
export default function App() {
    return (
        <>
            <burst></burst>
            <div className="SplashPage">Hunter Habersaat</div>
            <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
                rel="stylesheet"
                type="text/css"
            />
            <svg
                id="svg-source"
                height="0"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="close-icon">
                    <path d="M0.014,1.778L1.79,0.001l30.196,30.221l-1.778,1.777L0.014,1.778z" />
                    <path d="M1.79,31.999l-1.776-1.777L30.208,0.001l1.778,1.777L1.79,31.999z" />
                </g>
            </svg>
            <div class="look">Look Ma! I broke that HTML!</div>
            <a href="https://twitter.com/legomushroom" class="by"></a>
            <div id="js-show-modal" class="launch-button">
                show modal
                <div class="launch-button__glare"></div>
            </div>
            <div id="js-modal-overlay" class="modal-overlay"></div>
            <div id="js-modal-holder" class="modal-holder">
                <div id="js-hint1" class="hint hint--1"></div>
                <div id="js-hint2" class="hint hint--2"></div>
                <div
                    id="js-effect"
                    /* style="outline1: 1px solid red" */
                    class="effect">
                    <div class="effect__burst">
                        <svg
                            viewBox="0 0 300 300"
                            width="300"
                            height="300"
                            id="js-burst">
                            <g
                                id="Group"
                                sketchType="MSLayerGroup"
                                transform="translate(2.000000, 2.000000)"></g>
                        </svg>
                    </div>
                    <div class="effect__circle">
                        <svg viewBox="0 0 100 100" width="100" height="100">
                            <circle
                                cx="50"
                                cy="50"
                                fill="none"
                                id="js-circle"></circle>
                        </svg>
                    </div>
                    <div class="effect__line effect__line--1">
                        <svg viewBox="0 0 4 900" width="4" height="900">
                            <defs>
                                <g id="proto-line" class="js-line">
                                    <line
                                        x1="2"
                                        x2="2"
                                        y1="0"
                                        y2="900"
                                        stroke="red"
                                        stroke-dasharray="900 1800"
                                        stroke-dashoffset="900"></line>
                                    <line
                                        x1="2"
                                        x2="2"
                                        y1="0"
                                        y2="900"
                                        stroke="red"
                                        stroke-dasharray="900 1800"
                                        stroke-dashoffset="900"></line>
                                    <line
                                        x1="2"
                                        x2="2"
                                        y1="0"
                                        y2="900"
                                        stroke="red"
                                        stroke-dasharray="900 1800"
                                        stroke-dashoffset="900"></line>
                                </g>
                            </defs>
                            <use
                                xlinkHref="#proto-line"
                                width="4"
                                height="900"></use>
                        </svg>
                    </div>
                    <div class="effect__line effect__line--2">
                        <svg viewBox="0 0 4 900" width="4" height="900">
                            <use
                                xlinkHref="#proto-line"
                                width="4"
                                height="900"></use>
                        </svg>
                    </div>
                    <div class="effect__line effect__line--3">
                        <svg viewBox="0 0 4 900" width="4" height="900">
                            <use
                                xlinkHref="#proto-line"
                                width="4"
                                height="900"></use>
                        </svg>
                    </div>
                    <div class="effect__line effect__line--4">
                        <svg viewBox="0 0 4 900" width="4" height="900">
                            <use
                                xlinkHref="#proto-line"
                                width="4"
                                height="900"></use>
                        </svg>
                    </div>
                    <form1 action="" id="js-modal" class="modal">
                        <div id="js-close-button" class="modal__close">
                            <div id="" title="" class="icon ">
                                <svg viewBox="0 0 32 32">
                                    <use xlinkHref="#close-icon"></use>
                                </svg>
                            </div>
                        </div>
                        <div class="modal__header">Log In</div>
                        <div class="modal__description">
                            this is dumb modal window, click × to close it
                        </div>
                        <div class="modal__section">
                            <div class="input-with-label"></div>
                        </div>
                        <div class="modal__section grid grid--sliced grid--gutter-x2">
                            <div class="grid-bit grid-bit--14-20">
                                <button type="submit">log in</button>
                            </div>
                            <div class="grid-bit grid-bit--6-20">
                                <button class="button--grey">cancel</button>
                            </div>
                        </div>
                    </form1>
                    <svg /*style="display:none" */>
                        <image
                            width="480"
                            height="450"
                            xlinkHref=""
                            id="proto-image"
                            class="js-proto-image"></image>
                    </svg>
                    <div id="js-break-parts" class="break-parts">
                        <div id="js-svg-overlay" class="svg-overlay">
                            <svg viewBox="0 0 480 450" id="js-svg1">
                                <clipPath id="clip1">
                                    <path d="M0,450.575574 L0,0 L424.903452,0 L452.375,28.5599486 L20.5087638,460.426185 L0,450.575574 Z"></path>
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clip-path="url(#clip1)"
                                    id="js-image1"></use>
                            </svg>
                        </div>
                        <div class="svg-overlay svg-overlay--2">
                            <svg viewBox="0 0 480 450" id="js-svg2">
                                <clipPath id="clip2">
                                    <path d="M452.214614,28.6494713 L424.309513,0 L482.040672,0 L452.214614,28.6494713 Z"></path>
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clip-path="url(#clip2)"
                                    id="js-image2"></use>
                            </svg>
                        </div>
                        <div class="svg-overlay svg-overlay--3">
                            <svg viewBox="0 0 480 450" id="js-svg3">
                                <clipPath id="clip3">
                                    <path d="M452.320312,28.526424 L482,58 L482,0.066291362 L452.320312,28.526424 Z"></path>
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clip-path="url(#clip3)"
                                    id="js-image3"></use>
                            </svg>
                        </div>
                        <div class="svg-overlay">
                            <svg viewBox="0 0 480 450" id="js-svg4">
                                <clipPath id="clip4">
                                    <path d="M452.270844,28.4954427 L482,57.8942871 L482,451 L29.2740886,450.99999 L452.270844,28.4954427 Z"></path>
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clip-path="url(#clip4)"
                                    id="js-image4"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
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
