/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class Main {
    constructor(o) {
        if (o == null) {
            o = {};
        }
        this.o = o;
        this.vars();
        this.listeners();
    }
    vars() {
        this.$effect = $("#js-effect");
        this.$close = $("#js-close-button");
        this.$modal = $("#js-modal");
        this.$modalHolder = $("#js-modal-holder");
        this.$protoImage = $(".js-proto-image");
        this.$breakParts = $("#js-break-parts");
        this.$modalOverlay = $("#js-modal-overlay");
        this.$hint1 = $("#js-hint1");
        this.$hint2 = $("#js-hint2");
        this.$burst = $("#js-burst");
        this.$burstPaths = this.$burst.find("path");
        this.$showModal = $("#js-show-modal");
        this.$circle = $("#js-circle");
        this.$breakParts = $("#js-break-parts");
        this.$breakOverlays = this.$breakParts.find(".svg-overlay");
        this.$breakPart1 = this.$breakOverlays.eq(0);
        this.$breakPart2 = this.$breakOverlays.eq(1);
        this.$breakPart3 = this.$breakOverlays.eq(2);
        this.$breakPart4 = this.$breakOverlays.eq(3);
        this.$svgOverlay = $(".svg-overlay");

        this.$lines = $(".js-line").children();
        this.loop = this.loop.bind(this);
        this.loop();
        this.initEffectTweens();
        this.showModal(true);
        this.showHints(700);
        const isOpera = navigator.userAgent.match(/Opera|OPR\//);
        const crack1 = "http://legomushroom.com/pens-assets/XJjLxe/crack1.wav";
        const crack3 = "http://legomushroom.com/pens-assets/XJjLxe/crack3.mp3";
        const url = !isOpera ? crack3 : crack1;
        return (this.audio = new Howl({ urls: [url] }));
    }

    showHints(delay) {
        const it = this;
        const HIDE_DELAY = 5000;
        const HINT2_DELAY = 200;
        this.hint1T = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 500)
            .onUpdate(function () {
                return it.$hint1.css({ opacity: this.p });
            })
            .delay(delay)
            .start();

        this.hint2T = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 500)
            .onUpdate(function () {
                return it.$hint2.css({ opacity: this.p });
            })
            .delay(delay + HINT2_DELAY)
            .start();

        return (this.hintHideT = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 500)
            .onUpdate(function () {
                it.$hint1.css({ opacity: 1 - this.p });
                return it.$hint2.css({ opacity: 1 - this.p });
            })
            .delay(delay + HINT2_DELAY + HIDE_DELAY)
            .start());
    }

    showModal(isFirst) {
        if (isFirst) {
            var tm = setTimeout(() => {
                this.$modal.find("input").val("");
                return clearTimeout(tm);
            }, 10);
        }
        this.initEffectTweens(isFirst);
        return this.showModalT.start();
    }

    listeners() {
        this.$showModal.on("click", () => this.showModal());

        this.$modal.on("keyup", "input", function (e) {
            const $it = $(e.target);
            let text = $it.val();
            $it.toggleClass("is-fill", !!text);
            if ($it.attr("type") === "text") {
                text = text.replace(/\s/g, "");
            }
            const k = e.keyCode;
            if ((k > 48 && k < 90) || [48, 45, 32].includes(k)) {
                return $it.val(text);
            }
        });

        let $input = null;
        this.$close.on("mouseleave touchstart", function () {
            if ($input != null) {
                $input.removeClass("is-keep-focus");
            }
            return ($input = null);
        });

        this.$close.on("mouseenter touchstart", () => {
            $input = $("input:focus").addClass("is-keep-focus");
            return html2canvas(this.$modal, {
                onrendered: (canvas) => {
                    const dataURL = canvas.toDataURL();
                    this.$svgOverlay.css({ display: "block" });
                    return this.$protoImage.attr("xlink:href", dataURL);
                },
            });
        });

        return this.$close.on("click", () => {
            this.$modal.css({ display: "none" });
            this.$breakParts.css({
                "z-index": 2,
                opacity: 1,
            });
            this.$effect.show();
            this.launchEffects();
            this.audio.play();
            return true;
        });
    }

    initEffectTweens(isFirst) {
        let j;
        let i, len, path, showOffset;
        const it = this;
        this.s = 1;

        for (j = 0, i = j; j < it.$burstPaths.length; j++, i = j) {
            path = it.$burstPaths[i];
            len = path.getTotalLength();
            const showLen = this.rand(0, ~~len / 2);
            showOffset = this.rand(0, -~~len);
            path.len = len;
            path.showLen = showLen;
            path.showOffset = showOffset;
            path.strokeWidth = this.rand(0, 5);
            path.setAttribute("stroke-dasharray", `${showLen} ${3 * len}`);
            path.setAttribute("stroke-dashoffset", showLen);
            path.setAttribute("stroke-linecap", "round");
        }

        len = 900;
        const colors = ["hotpink", "yellow", "cyan"];
        this.linesT = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 900 * this.s)
            .easing(TWEEN.Easing.Exponential.Out)
            .onUpdate(function () {
                const { p } = this;
                const nP = 1 - p;
                const progress = len * nP - len * p;
                for (i = 0; i < it.$lines.length; i++) {
                    const line = it.$lines[i];
                    line.setAttribute(
                        "stroke-dashoffset",
                        progress + i * 500 * nP
                    );
                    line.setAttribute("stroke", colors[i]);
                    line.setAttribute("stroke-width", 2 * nP);
                }
                return it.$circle.attr({
                    r: 11 * p,
                    fill: `rgba(${~~(0 + 255 * p)},${~~(255 - 153 * p)},${~~(
                        255 -
                        75 * p
                    )}, ${nP})`,
                    "stroke-width": 7 * nP,
                });
            })
            .onComplete(() => this.$effect.css({ display: "none" }));

        this.burstT = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 400 * this.s)
            .onUpdate(function () {
                const { p } = this;
                const nP = 1 - p;
                return (() => {
                    const result = [];
                    for (i = 0; i < it.$burstPaths.length; i++) {
                        path = it.$burstPaths[i];
                        path.setAttribute(
                            "stroke-dashoffset",
                            path.showOffset - path.len * p
                        );
                        result.push(
                            path.setAttribute(
                                "stroke-width",
                                path.strokeWidth * nP
                            )
                        );
                    }
                    return result;
                })();
            });

        const shakeOffset = 50;
        this.shakeT = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 350 * this.s)
            .onUpdate(function () {
                const { p } = this;
                const nP = 1 - p;
                const shake = shakeOffset * nP;
                it.$breakParts.css({
                    transform: `translate(${shake}px, ${shake}px)`,
                });
                return it.$effect.css({
                    transform: `translate(${-0.75 * shake}px, ${
                        -0.5 * shake
                    }px)`,
                });
            })
            .easing(TWEEN.Easing.Elastic.Out);

        this.shiftT = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 1350 * this.s)
            // .easing TWEEN.Easing.Quadratic.In
            .easing(TWEEN.Easing.Sinusoidal.In)
            .onUpdate(function () {
                const { p } = this;
                const nP = 1 - p;
                const shift = 900 * p;
                const t1 = `translate(${-shift}px, ${1000 * p}px) rotate(${
                    -50 * p
                }deg)`;
                const t4 = `translate(0, ${1000 * p}px) rotate(${-15 * p}deg)`;
                it.$breakPart1.css({ transform: t1 });
                it.$breakPart4.css({ transform: t4 });
                return it.$modalOverlay.css({
                    transform: `translate(0, ${50 * p})`,
                    opacity: nP,
                });
            })
            .onComplete(() => {
                this.$modalOverlay.css({ display: "none" });
                this.$breakParts.css({ display: "none" });
                return this.$modalHolder.css({ display: "none" });
            });

        this.shiftT2 = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 1350 * this.s)
            .onUpdate(function () {
                const { p } = this;
                const nP = 1 - p;
                const shift = 900 * p;
                const t2 = `translate(${-1670 * p}px, ${-800 * p}px) rotate(${
                    905 * p
                }deg)`;
                const t3 = `translate(${1000 * p}px, ${700 * p}px) rotate(${
                    -1500 * p
                }deg)`;
                it.$breakPart2.css({ transform: t2 });
                return it.$breakPart3.css({ transform: t3 });
            });

        return (this.showModalT = new TWEEN.Tween({ p: 0 })
            .to({ p: 1 }, 800 * this.s)
            .easing(TWEEN.Easing.Exponential.Out)
            .onStart(() => {
                TWEEN.remove(this.shiftT);
                TWEEN.remove(this.shiftT2);
                TWEEN.remove(this.shakeT);
                TWEEN.remove(this.linesT);
                TWEEN.remove(this.burstT);
                this.$modal.css({ display: "block", opacity: 0 });
                this.$breakParts.css({ display: "block" });
                this.$modalHolder.css({ display: "block" });
                !isFirst &&
                    this.$modalOverlay.css({ display: "block", opacity: 0 });
                this.$breakPart1.css({ transform: "none" });
                this.$breakPart2.css({ transform: "none" });
                this.$breakPart3.css({ transform: "none" });
                this.$breakPart4.css({ transform: "none" });
                this.$modal.css({ display: "block" });
                return this.$breakParts.css({ "z-index": 0, opacity: 0 });
            })
            .onUpdate(function () {
                const { p } = this;
                const nP = 1 - p;
                it.$modal.css({
                    opacity: p,
                    transform: `translateY(${15 * nP}px)`,
                });
                return !isFirst && it.$modalOverlay.css({ opacity: p });
            }));
    }

    launchEffects() {
        this.$hint1.hide();
        this.$hint2.hide();
        this.burstT.start();
        this.linesT.start();
        this.shiftT.start();
        this.shiftT2.start();
        return this.shakeT.start();
    }

    loop() {
        requestAnimationFrame(this.loop);
        return TWEEN.update();
    }

    rand(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
}

new Main();
