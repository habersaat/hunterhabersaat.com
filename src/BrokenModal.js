import "./App.css";
import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <link rel="stylesheet" type="text/css" href="./styles.css" />
                <link
                    href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700"
                    rel="stylesheet"
                    type="text/css"
                />
                <svg
                    id="svg-source"
                    height={0}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "absolute", marginLeft: "-100%" }}
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="close-icon">
                        <path d="M0.014,1.778L1.79,0.001l30.196,30.221l-1.778,1.777L0.014,1.778z" />
                        <path d="M1.79,31.999l-1.776-1.777L30.208,0.001l1.778,1.777L1.79,31.999z" />
                    </g>
                </svg>
                <div className="look">Look Ma! I broke that HTML!</div>
                <a href="http://twitter.com/legomushroom" className="by" />
                <div id="js-show-modal" className="launch-button">
                    show modal
                    <div className="launch-button__glare" />
                </div>
                <div id="js-modal-overlay" className="modal-overlay" />
                <div id="js-modal-holder" className="modal-holder">
                    <div id="js-hint1" className="hint hint--1">
                        play with the form
                        <br />
                        to be sure it is just
                        <br />a plain HTML
                    </div>
                    <div id="js-hint2" className="hint hint--2">
                        then hit
                        <br />
                        the close icon
                    </div>
                    <div
                        id="js-effect"
                        style={{ outline1: "1px solid red" }}
                        className="effect">
                        <div className="effect__burst">
                            <svg
                                viewBox="0 0 300 300"
                                width={300}
                                height={300}
                                id="js-burst">
                                <g
                                    id="Group"
                                    sketchType="MSLayerGroup"
                                    transform="translate(2.000000, 2.000000)">
                                    <path
                                        d="M119.843557,132.665423 L142.438936,241.234321"
                                        stroke="#FC46AD"
                                        strokeWidth={2}
                                        transform="translate(131.141247, 186.949872) rotate(9.000000) translate(-131.141247, -186.949872) "
                                    />
                                    <path
                                        d="M120.923275,136.327807 L194.055085,223.544529"
                                        stroke="#D0D202"
                                        strokeWidth={2}
                                        transform="translate(157.489180, 179.936168) rotate(9.000000) translate(-157.489180, -179.936168) "
                                    />
                                    <path
                                        d="M110.892215,7.63766131 L143.724586,126.274355"
                                        stroke="#FFE217"
                                        strokeWidth={2}
                                        transform="translate(127.308401, 66.956008) rotate(-165.000000) translate(-127.308401, -66.956008) "
                                    />
                                    <path
                                        d="M198.35904,105.458064 L161.773069,223.598866"
                                        stroke="#B8E986"
                                        strokeWidth={3}
                                        transform="translate(180.066054, 164.528465) rotate(-74.000000) translate(-180.066054, -164.528465) "
                                    />
                                    <path
                                        d="M146.454121,53.5458334 L227.175148,153.69563"
                                        stroke="#D0D202"
                                        strokeWidth={2}
                                        transform="translate(186.814634, 103.620732) rotate(-74.000000) translate(-186.814634, -103.620732) "
                                    />
                                    <path
                                        d="M94.4127006,27.0036828 L46.0682754,156.269505"
                                        stroke="#51CAD7"
                                        strokeWidth={3}
                                        transform="translate(70.240488, 91.636594) rotate(-257.000000) translate(-70.240488, -91.636594) "
                                    />
                                    <path
                                        d="M29.3969741,113.63349 L113.205038,207.338224"
                                        stroke="#FC3F6B"
                                        strokeWidth={2}
                                        transform="translate(71.301006, 160.485857) rotate(-257.000000) translate(-71.301006, -160.485857) "
                                    />
                                    <path
                                        d="M125.792,38.3112087 L198.92381,125.527931"
                                        stroke="#D0D202"
                                        strokeWidth={2}
                                        transform="translate(162.357905, 81.919570) rotate(-104.000000) translate(-162.357905, -81.919570) "
                                    />
                                    <path
                                        d="M43.4006609,130.173225 L130.540432,224.973356"
                                        stroke="#FC46AD"
                                        strokeWidth={2}
                                        transform="translate(86.970546, 177.573291) rotate(-278.000000) translate(-86.970546, -177.573291) "
                                    />
                                    <path
                                        d="M157.646537,8.08731537 L121.060566,126.228117"
                                        stroke="#B8E986"
                                        strokeWidth={3}
                                        transform="translate(139.353552, 67.157716) rotate(-187.000000) translate(-139.353552, -67.157716) "
                                    />
                                    <path
                                        d="M139.340711,132.100895 L90.9962855,261.366717"
                                        stroke="#51CAD7"
                                        strokeWidth={3}
                                        transform="translate(115.168498, 196.733806) rotate(-10.000000) translate(-115.168498, -196.733806) "
                                    />
                                    <path
                                        d="M136.22617,122.003677 L220.034234,215.708411"
                                        stroke="#FC3F6B"
                                        strokeWidth={2}
                                        transform="translate(178.130202, 168.856044) rotate(-10.000000) translate(-178.130202, -168.856044) "
                                    />
                                </g>
                            </svg>
                        </div>
                        <div className="effect__circle">
                            <svg viewBox="0 0 100 100" width={100} height={100}>
                                <circle
                                    cx={50}
                                    cy={50}
                                    fill="none"
                                    id="js-circle"
                                />
                            </svg>
                        </div>
                        <div className="effect__line effect__line--1">
                            <svg viewBox="0 0 4 900" width={4} height={900}>
                                <defs>
                                    <g id="proto-line" className="js-line">
                                        <line
                                            x1={2}
                                            x2={2}
                                            y1={0}
                                            y2={900}
                                            stroke="red"
                                            strokeDasharray="900 1800"
                                            strokeDashoffset={900}
                                        />
                                        <line
                                            x1={2}
                                            x2={2}
                                            y1={0}
                                            y2={900}
                                            stroke="red"
                                            strokeDasharray="900 1800"
                                            strokeDashoffset={900}
                                        />
                                        <line
                                            x1={2}
                                            x2={2}
                                            y1={0}
                                            y2={900}
                                            stroke="red"
                                            strokeDasharray="900 1800"
                                            strokeDashoffset={900}
                                        />
                                    </g>
                                </defs>
                                <use
                                    xlinkHref="#proto-line"
                                    width={4}
                                    height={900}
                                />
                            </svg>
                        </div>
                        <div className="effect__line effect__line--2">
                            <svg viewBox="0 0 4 900" width={4} height={900}>
                                <use
                                    xlinkHref="#proto-line"
                                    width={4}
                                    height={900}
                                />
                            </svg>
                        </div>
                        <div className="effect__line effect__line--3">
                            <svg viewBox="0 0 4 900" width={4} height={900}>
                                <use
                                    xlinkHref="#proto-line"
                                    width={4}
                                    height={900}
                                />
                            </svg>
                        </div>
                        <div className="effect__line effect__line--4">
                            <svg viewBox="0 0 4 900" width={4} height={900}>
                                <use
                                    xlinkHref="#proto-line"
                                    width={4}
                                    height={900}
                                />
                            </svg>
                        </div>
                    </div>
                    <form1 action id="js-modal" className="modal">
                        <div id="js-close-button" className="modal__close">
                            <div id title className="icon">
                                <svg viewBox="0 0 32 32">
                                    <use xlinkHref="#close-icon" />
                                </svg>
                            </div>
                        </div>
                        <div className="modal__header">Log In</div>
                        <div className="modal__description">
                            this is dumb modal window, click × to close it
                        </div>
                        <div className="modal__section">
                            <div className="input-with-label">
                                <input
                                    id="name"
                                    type="text"
                                    className="input-with-label__input"
                                />
                                <label
                                    htmlFor="name"
                                    className="input-with-label__label">
                                    username or email
                                    <div className="input-with-label__label__corner" />
                                </label>
                            </div>
                        </div>
                        <div className="modal__section">
                            <div className="input-with-label">
                                <input
                                    id="password"
                                    type="password"
                                    className="input-with-label__input"
                                />
                                <label
                                    htmlFor="password"
                                    className="input-with-label__label">
                                    password
                                    <div className="input-with-label__label__corner" />
                                </label>
                            </div>
                        </div>
                        <div className="modal__section grid grid--sliced grid--gutter-x2">
                            <div className="grid-bit grid-bit--14-20">
                                <button type="submit">log in</button>
                            </div>
                            <div className="grid-bit grid-bit--6-20">
                                <button className="button--grey">cancel</button>
                            </div>
                        </div>
                    </form1>
                    <svg style={{ display: "none" }}>
                        <image
                            width={480}
                            height={450}
                            xlinkHref
                            id="proto-image"
                            className="js-proto-image"
                        />
                    </svg>
                    <div id="js-break-parts" className="break-parts">
                        <div id="js-svg-overlay" className="svg-overlay">
                            <svg viewBox="0 0 480 450" id="js-svg1">
                                <clipPath id="clip1">
                                    <path d="M0,450.575574 L0,0 L424.903452,0 L452.375,28.5599486 L20.5087638,460.426185 L0,450.575574 Z" />
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clipPath="url(#clip1)"
                                    id="js-image1"
                                />
                            </svg>
                        </div>
                        <div className="svg-overlay svg-overlay--2">
                            <svg viewBox="0 0 480 450" id="js-svg2">
                                <clipPath id="clip2">
                                    <path d="M452.214614,28.6494713 L424.309513,0 L482.040672,0 L452.214614,28.6494713 Z" />
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clipPath="url(#clip2)"
                                    id="js-image2"
                                />
                            </svg>
                        </div>
                        <div className="svg-overlay svg-overlay--3">
                            <svg viewBox="0 0 480 450" id="js-svg3">
                                <clipPath id="clip3">
                                    <path d="M452.320312,28.526424 L482,58 L482,0.066291362 L452.320312,28.526424 Z" />
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clipPath="url(#clip3)"
                                    id="js-image3"
                                />
                            </svg>
                        </div>
                        <div className="svg-overlay">
                            <svg viewBox="0 0 480 450" id="js-svg4">
                                <clipPath id="clip4">
                                    <path d="M452.270844,28.4954427 L482,57.8942871 L482,451 L29.2740886,450.99999 L452.270844,28.4954427 Z" />
                                </clipPath>
                                <use
                                    xlinkHref="#proto-image"
                                    clipPath="url(#clip4)"
                                    id="js-image4"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
