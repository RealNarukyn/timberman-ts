"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const timberman_1 = __importDefault(require("./actors/timberman"));
const wooden_log_1 = __importDefault(require("./actors/wooden-log"));
window.onload = () => {
    const canvas = document.getElementById('canvas-game');
    const ctx = canvas.getContext('2d');
    const tmPos = {
        x: canvas.width / 2 - 50,
        y: canvas.height - 150
    };
    const timberman = new timberman_1.default(tmPos);
    const woodenTree = [];
    for (let i = 1; i <= 10; i += 1) {
        const wlPos = {
            x: canvas.width / 2 - 50,
            y: canvas.height - 200 - i * 60
        };
        woodenTree.push(new wooden_log_1.default(wlPos, i === 0));
    }
    let lastFrame = 0;
    const render = (time) => {
        // -- Get Delta
        const delta = (time - lastFrame) / 1000;
        lastFrame = time;
        console.log(delta);
        // -- Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // -- Draw Elements
        timberman.draw(ctx);
        woodenTree.forEach((e) => {
            e.draw(ctx);
        });
        window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
};
