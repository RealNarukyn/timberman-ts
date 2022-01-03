import { mapManager } from '../managers/MapManager';
import { Position, facingENUM } from '../types/positions';
import { Size } from '../types/sizes';
import { KeyboardMap } from '../utils/keyboard-map';
import Actor from './Actor';

const HEALTH_DECRESEASE_SPEED: number = 16;
const HEALTH_INCRESEASE_SPEED: number = 12;

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

  health: number;

  points: number;

  healthBarPos: Position;

  healthBarSize: Size;

  pointsPosition: Position;

  pointsSize: Size;

  constructor(
    canvasSize: Size,
    healthPos: Position,
    pointsPos: Position,
    keyboardMap: KeyboardMap
  ) {
    super();
    this.tmSize = { width: 100, height: 100 };
    this.positions = createPositionsTM(canvasSize, this.tmSize);
    this.facing = facingENUM.RIGHT;
    this.keyboardMap = keyboardMap;
    this.health = 100;
    this.points = 0;
    this.healthBarPos = healthPos;
    this.healthBarSize = { width: this.health, height: 30 };
    this.pointsPosition = pointsPos;
    this.pointsSize = { width: 30, height: 40 };
  }

  update(delta: number) {
    if (this.health > 100) this.health = 100;
    if (this.health < 0) this.health = 0;

    this.health -= HEALTH_DECRESEASE_SPEED * delta;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const curPosition: Position =
      this.facing === facingENUM.LEFT ? this.positions[0] : this.positions[1];

    ctx.save();

    ctx.fillStyle = 'red';

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

    if (input === facingENUM.LEFT) {
      this.facing = facingENUM.LEFT;
      this.health += HEALTH_INCRESEASE_SPEED * 0.2;
      this.points++;
    }

    if (input === facingENUM.RIGHT) {
      this.facing = facingENUM.RIGHT;
      this.health += HEALTH_INCRESEASE_SPEED * 0.2;
      this.points++;
    }
  }
}

export default Timberman;
