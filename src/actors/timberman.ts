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
    ctx.lineWidth = 4;

    const position = { x: this.position.x, y: this.position.y };
    ctx.rect(position.x, position.y, 100, 100);

    ctx.stroke();
    ctx.fill();

    ctx.restore();
  }

  // handleInput() {}
}

export default Timberman;
