import { Position, facingENUM } from '../types/positions';
import { KeyboardMap } from '../utils/keyboard-map';

class Timberman {
  positions: Array<Position>;

  facing: facingENUM;

  keyboardMap: KeyboardMap;

  constructor(positions: Array<Position>, keyboardMap: KeyboardMap) {
    this.positions = positions;
    this.facing = facingENUM.LEFT;
    this.keyboardMap = keyboardMap;
  }

  // update() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = 'red';

    const curPosition: Position =
      this.facing === facingENUM.LEFT ? this.positions[0] : this.positions[1];
    ctx.fillRect(curPosition.x, curPosition.y, 100, 100);

    ctx.restore();
  }

  handleInputDOWN(key: string) {
    const input = this.keyboardMap[key];

    if (input === facingENUM.LEFT) this.facing = facingENUM.LEFT;
    if (input === facingENUM.RIGHT) this.facing = facingENUM.RIGHT;
  }
}

export default Timberman;
