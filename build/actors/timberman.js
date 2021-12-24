"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const positions_1 = require("../types/positions");
class Timberman {
    constructor(position) {
        this.position = position;
        this.facing = positions_1.facingENUM.RIGHT;
    }
    // update() {}
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, 100, 100);
        ctx.restore();
    }
}
exports.default = Timberman;
