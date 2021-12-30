import { mapManager } from '../managers/MapManager';
import { Position } from '../types/positions';
import { Size } from '../types/sizes';
import WoodenLog from './wooden-log';

const createWoodenLogs = (
  canvas: Size,
  numLogs: number = 10
): Array<WoodenLog> => {
  const tree: Array<WoodenLog> = [];

  for (let i = 0; i < numLogs; i++) {
    const wlPos: Position = {
      x: mapManager.points[2].start + mapManager.pointsWidth / 2,
      y: canvas.height - 150 - i * 105
    };

    tree.push(new WoodenLog(wlPos, i === 0));
  }

  return tree;
};

class Tree {
  woodenLogs: Array<WoodenLog>;

  constructor(canvas: Size, numLogs: number = 10) {
    this.woodenLogs = createWoodenLogs(canvas, numLogs);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.woodenLogs.forEach((e) => e.draw(ctx));
  }
}

export default Tree;
