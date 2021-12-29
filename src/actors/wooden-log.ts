import { Position, facingENUM } from '../types/positions';

class WoodenLog {
  position: Position;

  branch: facingENUM;

  constructor(position: Position, firstLog: boolean) {
    this.position = position;

    if (firstLog) {
      this.branch = facingENUM.LEFT;
    } else {
      const rand = Math.floor(Math.random() * 2) + 1;
      this.branch = rand === 1 ? facingENUM.LEFT : facingENUM.RIGHT;
    }
  }

  // update() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = 'blue';
    ctx.fillRect(this.position.x, this.position.y, 100, 100);

    ctx.restore();
  }

  // handleInput() {}
}

export default WoodenLog;
