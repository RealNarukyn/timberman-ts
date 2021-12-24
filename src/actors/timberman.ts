import { Position, facingENUM } from '../types/positions';

class Timberman {
  position: Position;

  facing: facingENUM;

  constructor(position: Position) {
    this.position = position;
    this.facing = facingENUM.RIGHT;
  }

  // update() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = 'red';
    ctx.fillRect(this.position.x, this.position.y, 100, 100);

    ctx.restore();
  }

  // handleInput() {}
}

export default Timberman;
