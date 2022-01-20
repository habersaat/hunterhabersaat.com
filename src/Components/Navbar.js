import React, { useState, Component } from "react";
import "../styles.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div>
                <div class="highlightTextOut">
                    <Link to="/">HOME </Link>
                    <Link to="/articles">ARTICLES </Link>
                    <Link to="/portfolio">PORTFOLIO </Link>
                    <Link to="/about">ABOUT </Link>
                    <Link to="/contact">CONTACT </Link>
                </div>
            </div>
        </>
    );
}
