"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const positions_1 = require("../types/positions");
class Timberman {
    constructor(positions, keyboardMap) {
        this.positions = positions;
        this.facing = positions_1.facingENUM.LEFT;
        this.keyboardMap = keyboardMap;
    }
    // update() {}
    draw(ctx) {
        ctx.save();
        ctx.fillStyle = 'red';
        const curPosition = this.facing === positions_1.facingENUM.LEFT ? this.positions[0] : this.positions[1];
        ctx.fillRect(curPosition.x, curPosition.y, 100, 100);
        ctx.restore();
    }
    handleInputDOWN(key) {
        const input = this.keyboardMap[key];
        if (input === positions_1.facingENUM.LEFT)
            this.facing = positions_1.facingENUM.LEFT;
        if (input === positions_1.facingENUM.RIGHT)
            this.facing = positions_1.facingENUM.RIGHT;
    }
}
exports.default = Timberman;
