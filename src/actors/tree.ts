import { mapManager } from '../managers/MapManager';
import { facingENUM, Position } from '../types/positions';
import { Size } from '../types/sizes';
import { KeyboardMap } from '../utils/keyboard-map';
import Actor from './actor';
import WoodenLog from './wooden-log';

const createWoodenLogs = (
  canvas: Size,
  numLogs: number = 10
): Array<WoodenLog> => {
  const tree: Array<WoodenLog> = [];

  for (let i = 0; i < numLogs; i++) {
    const wlSize: Size = { width: 100, height: 100 };

    const middlePosPoint =
      mapManager.points[2].start + mapManager.pointsWidth / 2;

    const wlPos: Position = {
      x: middlePosPoint - wlSize.width / 2,
      y: canvas.height - 150 - i * 105
    };

    tree.push(new WoodenLog(wlPos, wlSize, i === 0));
  }

  return tree;
};

class Tree extends Actor {
  woodenLogs: Array<WoodenLog>;

  keyboardMap: KeyboardMap;

  constructor(canvas: Size, keyboardMap: KeyboardMap, numLogs: number = 10) {
    super();
    this.woodenLogs = createWoodenLogs(canvas, numLogs);
    this.keyboardMap = keyboardMap;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.woodenLogs.forEach((e) => e.draw(ctx));
  }

  handleInputDOWN(key: string) {
    const input = this.keyboardMap[key];

    if (input === facingENUM.LEFT || input === facingENUM.RIGHT) {
      // -- Remove First Element
      this.woodenLogs.shift();

      // -- Move all the [ Wooden Log ] Positions
      this.woodenLogs.forEach((wl) => {
        wl.position.y += wl.wlSize.height + 5;
      });

      // -- Add new [ Wooden Log ] to the tree at the last position
      const wlSize: Size = { width: 100, height: 100 };

      const middlePosPoint =
        mapManager.points[2].start + mapManager.pointsWidth / 2;

      const wlPos: Position = {
        x: middlePosPoint - wlSize.width / 2,
        y: mapManager.canvasSize.height - 150 - 9 * 105
      };

      this.woodenLogs.push(new WoodenLog(wlPos, wlSize));
    }
  }
}

export default Tree;
