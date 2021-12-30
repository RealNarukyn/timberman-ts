import { mapManager } from '../managers/MapManager';
import { Position, facingENUM } from '../types/positions';
import { Size } from '../types/sizes';
import { KeyboardMap } from '../utils/keyboard-map';
import Actor from './actor';

const createPositionsTM = (canvas: Size, tmSize: Size): Array<Position> => {
  // -- Left Point
  let middlePosPoint = mapManager.points[1].start + mapManager.pointsWidth / 2;
  const tmPosLeft: Position = {
    x: middlePosPoint - tmSize.width / 2,
    y: canvas.height - 150
  };

  // -- Right Point
  middlePosPoint = mapManager.points[3].start + mapManager.pointsWidth / 2;
  const tmPosRight: Position = {
    x: middlePosPoint - tmSize.width / 2,
    y: canvas.height - 150
  };

  return [tmPosLeft, tmPosRight];
};

class Timberman extends Actor {
  tmSize: Size;

  positions: Array<Position>;

  facing: facingENUM;

  keyboardMap: KeyboardMap;

  constructor(canvasSize: Size, keyboardMap: KeyboardMap) {
    super();

    this.tmSize = { width: 100, height: 100 };

    this.positions = createPositionsTM(canvasSize, this.tmSize);

    this.facing = facingENUM.RIGHT;

    this.keyboardMap = keyboardMap;
  }

  // update() {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = 'red';

    const curPosition: Position =
      this.facing === facingENUM.LEFT ? this.positions[0] : this.positions[1];

    ctx.fillRect(
      curPosition.x,
      curPosition.y,
      this.tmSize.width,
      this.tmSize.height
    );

    ctx.restore();
  }

  handleInputDOWN(key: string) {
    const input = this.keyboardMap[key];

    if (input === facingENUM.LEFT) this.facing = facingENUM.LEFT;
    if (input === facingENUM.RIGHT) this.facing = facingENUM.RIGHT;
  }
}

export default Timberman;
