import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Articles from "./pages/Articles";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BrokenModal from "./BrokenModal";
import NHSSecret from "./pages/NHSSecret";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/nhs-secret" element={<NHSSecret />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
