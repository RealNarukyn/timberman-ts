import { mapManager } from '../managers/MapManager';
import { Position, facingENUM } from '../types/positions';
import { Size } from '../types/sizes';
import { KeyboardMap } from '../utils/keyboard-map';
import Actor from './Actor';

const HEALTH_DECRESEASE_SPEED: number = 16;
const HEALTH_INCRESEASE_SPEED: number = 12;
const HEALTH_BAR_HEIGHT: number = 20;

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

  constructor(canvasSize: Size, keyboardMap: KeyboardMap) {
    super();

    this.tmSize = { width: 100, height: 100 };

    this.positions = createPositionsTM(canvasSize, this.tmSize);

    this.facing = facingENUM.RIGHT;

    this.keyboardMap = keyboardMap;

    this.health = 100;
  }

  update(delta: number) {
    if (this.health > 100) this.health = 100;
    if (this.health < 0) this.health = 0;

    this.health -= HEALTH_DECRESEASE_SPEED * delta;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // #region [ Draw Timberman ]
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
    // #endregion

    // #region [ Draw Healthbar ]
    ctx.save();
    ctx.fillStyle = 'orange';
    ctx.fillRect(
      curPosition.x,
      curPosition.y - (HEALTH_BAR_HEIGHT + 10),
      this.health,
      HEALTH_BAR_HEIGHT
    );
    ctx.restore();
    // #endregion
  }

  handleInputDOWN(key: string) {
    const input = this.keyboardMap[key];

    if (input === facingENUM.LEFT) {
      this.facing = facingENUM.LEFT;
      this.health += HEALTH_INCRESEASE_SPEED * 0.2;
    }

    if (input === facingENUM.RIGHT) {
      this.facing = facingENUM.RIGHT;
      this.health += HEALTH_INCRESEASE_SPEED * 0.2;
    }
  }
}

export default Timberman;
