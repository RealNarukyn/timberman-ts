"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const positions_1 = require("../types/positions");
class WoodenLog {
    constructor(position, firstLog) {
        this.position = position;
        if (firstLog) {
            this.branch = positions_1.facingENUM.LEFT;
        }
        else {
            const rand = Math.floor(Math.random() * 2) + 1;
            this.branch = rand === 1 ? positions_1.facingENUM.LEFT : positions_1.facingENUM.RIGHT;
        }
    }
    // update() {}
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, 100, 100);
        ctx.restore();
    }
}
exports.default = WoodenLog;
