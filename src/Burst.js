import React, { useRef, useEffect, useState } from "react";
import mojs from "@mojs/core";

const createWave = (coords) => {
    const burst = new mojs.Burst({
        radius: { 0: 80 },
        count: 10,
        left: 0,
        top: 0,
        children: {
            shape: "line",
            stroke: "#FFFFFF",
            radius: 5,
            angle: { 360: 0 },
            duration: 1000,
            opacity: { 1: 0 },
        },
    });

    const circle = {
        left: 0,
        top: 0,
        radius: { 0: 100 },
        fill: "none",
        stroke: "#ffffff",
        delay: 250,
        opacity: { 0.6: 0 },
        duration: 1500,
    };

    const circleShape1 = new mojs.Shape({
        ...circle,
    });

    const circleShape2 = new mojs.Shape({
        ...circle,
        raius: { 0: 200 },
        duration: 800,
    });

    const circleShape3 = new mojs.Shape({
        ...circle,
        raius: { 0: 150 },
        duration: 1000,
    });

    const timeline = new mojs.Timeline().add(
        burst,
        circleShape1,
        circleShape2,
        circleShape3
    );

    burst.tune(coords);
    circleShape1.tune(coords);
    circleShape2.tune(coords);
    circleShape3.tune(coords);

    timeline.replay();
};
