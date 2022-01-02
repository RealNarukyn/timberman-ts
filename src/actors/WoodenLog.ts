import { Position, facingENUM } from '../types/positions';
import { Size } from '../types/sizes';

class WoodenLog {
  position: Position;

  branchFacing: facingENUM;

  wlSize: Size;

  branchSize: Size;

  constructor(position: Position, wlSize: Size, firstLog: boolean = false) {
    this.position = position;
    this.wlSize = wlSize;

    if (firstLog) {
      this.branchFacing = facingENUM.LEFT;
    } else {
      const rand = Math.floor(Math.random() * 3) + 1;
      if (rand === 1) this.branchFacing = facingENUM.LEFT;
      else if (rand === 2) this.branchFacing = facingENUM.RIGHT;
      else this.branchFacing = facingENUM.NONE;
    }
    this.branchSize = { width: 100, height: 30 };
  }

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

    // -- Render branchFacing
    if (this.branchFacing !== facingENUM.NONE) {
      ctx.save();
      ctx.fillStyle = 'green';

      const branchPos: number =
        this.branchFacing === facingENUM.LEFT
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
  }
}

export default WoodenLog;
