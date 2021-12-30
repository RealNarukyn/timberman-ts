import { Position, facingENUM } from '../types/positions';
import { Size } from '../types/sizes';

class WoodenLog {
  position: Position;

  branch: facingENUM;

  wlSize: Size;

  branchSize: Size;

  constructor(position: Position, firstLog: boolean) {
    this.position = position;
    this.wlSize = { width: 100, height: 100 };

    if (firstLog) {
      this.branch = facingENUM.LEFT;
    } else {
      const rand = Math.floor(Math.random() * 2) + 1;
      this.branch = rand === 1 ? facingENUM.LEFT : facingENUM.RIGHT;
    }
    this.branchSize = { width: 100, height: 30 };
  }

  // update() {}

  draw(ctx: CanvasRenderingContext2D) {
    // -- Render Wooden Log
    ctx.save();
    ctx.fillStyle = 'blue';
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.wlSize.width,
      this.wlSize.height
    );
    ctx.restore();

    // -- Render Branch
    ctx.save();
    ctx.fillStyle = 'brown';
    const branchPos: number =
      this.branch === facingENUM.LEFT
        ? this.position.x - this.branchSize.width
        : this.position.x + this.branchSize.width;
    ctx.fillRect(
      branchPos,
      this.position.y,
      this.branchSize.width,
      this.branchSize.height
    );
    ctx.restore();
  }

  // handleInput() {}
}

export default WoodenLog;
