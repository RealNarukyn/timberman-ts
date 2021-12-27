"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGameManager = exports.Manager = void 0;
const getPointsArray = (pointsWidth) => {
    const pointsHelper = [];
    let start = 0;
    for (let i = 0; i < 5; i++) {
        const end = start + pointsWidth;
        pointsHelper.push({ start, end });
        start += pointsWidth;
    }
    return pointsHelper;
};
class GameManager {
    constructor(canvasW = 800) {
        this.pointsWidth = canvasW / 5;
        const pointsHelper = getPointsArray(this.pointsWidth);
        this.points = pointsHelper;
    }
}
const initGameManager = (canvasW) => {
    exports.Manager = new GameManager(canvasW);
};
exports.initGameManager = initGameManager;
