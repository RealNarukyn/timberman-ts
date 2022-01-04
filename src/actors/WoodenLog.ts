import { Position, facingENUM } from '../types/positions';
import { Size } from '../types/sizes';

const LEFT_BRANCH_SPRITE = require('../../public/GameResources/img/branch1.png');
const RIGHT_BRANCH_SPRITE = require('../../public/GameResources/img/branch2.png');
const WOODEN_LOG_1_SPRITE = require('../../public/GameResources/img/trunk1.png');
const WOODEN_LOG_2_SPRITE = require('../../public/GameResources/img/trunk2.png');

class WoodenLog {
  position: Position;

  branchFacing: facingENUM;

  wlSize: Size;

  treeSprite: HTMLImageElement;

  constructor(position: Position, wlSize: Size, branchFacing: facingENUM) {
    this.position = position;
    this.wlSize = wlSize;
    this.branchFacing = branchFacing;

    this.treeSprite = new Image();
    if (this.branchFacing === facingENUM.LEFT)
      this.treeSprite.src = LEFT_BRANCH_SPRITE;

    if (this.branchFacing === facingENUM.RIGHT)
      this.treeSprite.src = RIGHT_BRANCH_SPRITE;

    if (this.branchFacing === facingENUM.NONE) {
      const randTrunk = Math.floor(Math.random() * 2) + 1;
      this.treeSprite.src =
        randTrunk === 1 ? WOODEN_LOG_1_SPRITE : WOODEN_LOG_2_SPRITE;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    // -- Render Wooden Log
    ctx.save();

    ctx.drawImage(
      this.treeSprite,
      this.position.x,
      this.position.y,
      this.wlSize.width,
      this.wlSize.height
    );

    ctx.restore();
  }
}

export default WoodenLog;
