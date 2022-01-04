import { mapManager } from '../managers/MapManager';
import { facingENUM, Position } from '../types/positions';
import { Size } from '../types/sizes';
import { KeyboardMap } from '../utils/keyboard-map';
import Actor from './Actor';
import WoodenLog from './WoodenLog';

const STUMP_SPRITE = require('../../public/GameResources/img/stump.png');

const margin: Size = { width: 18, height: 120 };
const marginWL: Size = { width: 20, height: 180 };
const wlSize: Size = { width: 460, height: 140 };

const getBranchPosition = (lastLog: WoodenLog): facingENUM => {
  if (lastLog.branchFacing === facingENUM.LEFT) {
    const rand = Math.floor(Math.random() * 3) + 1;
    if (rand !== 1 && rand !== 2) return facingENUM.LEFT;
  }

  if (lastLog.branchFacing === facingENUM.RIGHT) {
    const rand = Math.floor(Math.random() * 3) + 1;
    if (rand !== 1 && rand !== 2) return facingENUM.RIGHT;
  }

  if (lastLog.branchFacing === facingENUM.NONE) {
    const rand = Math.floor(Math.random() * 7) + 1;
    if (rand === 1 || rand === 3 || rand === 5) return facingENUM.LEFT;
    if (rand === 2 || rand === 4 || rand === 6) return facingENUM.RIGHT;
  }

  return facingENUM.NONE;
};

const initWoodenLogs = (
  canvas: Size,
  firstLogSize: Size,
  numLogs: number = 10
): Array<WoodenLog> => {
  const tree: Array<WoodenLog> = [];

  const middlePosPoint =
    mapManager.points[2].start + mapManager.pointsWidth / 2;

  // -- Create first wooden log
  const wlPos1: Position = {
    x: middlePosPoint - marginWL.width - wlSize.width / 2,
    y: canvas.height - (marginWL.height + firstLogSize.height)
  };
  tree.push(new WoodenLog(wlPos1, wlSize, facingENUM.LEFT));

  // -- Fill the array *Start at 1 cause we manually filled the first one*
  for (let i = 1; i < numLogs; i++) {
    // -- Wooden Log Position
    const wlPos: Position = {
      x: middlePosPoint - marginWL.width - wlSize.width / 2,
      y:
        canvas.height -
        (marginWL.height + firstLogSize.height) -
        i * wlSize.height
    };

    // -- Branch Direction
    const branchFacing = getBranchPosition(tree[i - 1]);

    // -- Add the new wooden log to the tree
    tree.push(new WoodenLog(wlPos, wlSize, branchFacing));
  }

  return tree;
};

class Tree extends Actor {
  woodenLogs: Array<WoodenLog>;

  keyboardMap: KeyboardMap;

  firstLogSize: Size;

  firstLogPos: Position;

  firstLogSprite: HTMLImageElement;

  constructor(canvas: Size, keyboardMap: KeyboardMap, numLogs: number = 10) {
    super();
    this.firstLogSize = { width: 180, height: 80 };
    const middlePosPoint =
      mapManager.points[2].start + mapManager.pointsWidth / 2;

    this.firstLogPos = {
      x: middlePosPoint - margin.width - this.firstLogSize.width / 2,
      y: mapManager.canvasSize.height - margin.height
    };
    this.firstLogSprite = new Image();
    this.firstLogSprite.src = STUMP_SPRITE;

    this.woodenLogs = initWoodenLogs(canvas, this.firstLogSize, numLogs);

    this.keyboardMap = keyboardMap;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // -- Draw First Log
    ctx.save();

    ctx.drawImage(
      this.firstLogSprite,
      this.firstLogPos.x,
      this.firstLogPos.y,
      this.firstLogSize.width,
      this.firstLogSize.height
    );

    ctx.restore();

    // -- Draw Wooden Logs
    this.woodenLogs.forEach((e) => e.draw(ctx));
  }

  handleInputDOWN(key: string) {
    const input = this.keyboardMap[key];
    if (input !== facingENUM.LEFT && input !== facingENUM.RIGHT) return;

    // -- Remove First Element
    this.woodenLogs.shift();

    // -- Move all the [ Wooden Log ] Positions
    this.woodenLogs.forEach((wl) => {
      wl.position.y += wl.wlSize.height;
    });

    // -- Add new [ Wooden Log ] to the tree at the last position
    const middlePosPoint =
      mapManager.points[2].start + mapManager.pointsWidth / 2;

    const wlPos: Position = {
      x: middlePosPoint - marginWL.width - wlSize.width / 2,
      y:
        mapManager.canvasSize.height -
        (marginWL.height + this.firstLogSize.height) -
        9 * wlSize.height
    };

    // -- Branch Direction
    const branchFacing = getBranchPosition(
      this.woodenLogs[this.woodenLogs.length - 1]
    );

    this.woodenLogs.push(new WoodenLog(wlPos, wlSize, branchFacing));
  }
}

export default Tree;
