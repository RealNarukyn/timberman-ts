"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MapManager_1 = require("./managers/MapManager");
const timberman_1 = __importDefault(require("./actors/timberman"));
const wooden_log_1 = __importDefault(require("./actors/wooden-log"));
const keyboard_map_1 = require("./utils/keyboard-map");
window.onload = () => {
    const canvas = document.getElementById('canvas-game');
    const ctx = canvas.getContext('2d');
    // -- Init Managers
    (0, MapManager_1.initMapManager)(canvas.width);
    console.log('The Map is divided horizontally in:', MapManager_1.mapManager.points);
    // -- Init Actors
    // #region [ Timberman ]
    const tmPosLeft = {
        x: MapManager_1.mapManager.points[1].start + MapManager_1.mapManager.pointsWidth / 2,
        y: canvas.height - 150
    };
    const tmPosRight = {
        x: MapManager_1.mapManager.points[3].start + MapManager_1.mapManager.pointsWidth / 2,
        y: canvas.height - 150
    };
    const timberman = new timberman_1.default([tmPosLeft, tmPosRight], keyboard_map_1.mapA);
    // #endregion
    // #region [ Wooden Tree ]
    const woodenTree = [];
    for (let i = 0; i < 10; i++) {
        const wlPos = {
            x: MapManager_1.mapManager.points[2].start + MapManager_1.mapManager.pointsWidth / 2,
            y: canvas.height - 150 - i * 110
        };
        woodenTree.push(new wooden_log_1.default(wlPos, i === 0));
    }
    // #endregion
    // -- Render Loop
    let lastFrame = 0;
    const render = (time) => {
        // -- Get Delta
        const delta = (time - lastFrame) / 1000;
        lastFrame = time;
        // console.log(delta);
        // -- Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // -- Draw Elements
        timberman.draw(ctx);
        woodenTree.forEach((e) => {
            e.draw(ctx);
        });
        // -- Recurisve
        window.requestAnimationFrame(render);
    };
    // -- Start the game
    window.requestAnimationFrame(render);
    // -- Add Event Listeners
    document.body.addEventListener('keydown', (event) => {
        timberman.handleInputDOWN(event.key);
    });
};
