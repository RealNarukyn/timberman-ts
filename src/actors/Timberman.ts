import { mapManager } from '../managers/MapManager';
import { Position, facingENUM } from '../types/positions';
import { Size } from '../types/sizes';
import { KeyboardMap } from '../utils/keyboard-map';
import Actor from './Actor';
import { framesTimberman } from '../utils/numbers-frames';
import { TimbermanStatus } from '../utils/player-status';

const timbermanSprites = require('../../public/GameResources/img/man.png');
const timbermanRIPSprite = require('../../public/GameResources/img/rip.png');

const HEALTH_DECRESEASE_SPEED: number = 16;
const HEALTH_INCRESEASE_SPEED: number = 12;
const NUM_SPRITES = 2;

const createPositionsTM = (canvas: Size, tmSize: Size): Array<Position> => {
  // -- Left Point
  let middlePosPoint = mapManager.points[1].start + mapManager.pointsWidth / 2;
  const tmPosLeft: Position = {
    x: middlePosPoint - tmSize.width / 2,
    y: canvas.height - 100 - tmSize.height / 2
  };

  // -- Right Point
  middlePosPoint = mapManager.points[3].start + mapManager.pointsWidth / 2;
  const tmPosRight: Position = {
    x: middlePosPoint - tmSize.width / 2,
    y: canvas.height - 100 - tmSize.height / 2
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

  timbermanImage: HTMLImageElement;

  timbermanDeadImage: HTMLImageElement;

  timbermanStatus: TimbermanStatus;

  animationCount: number;

  time: number;

  constructor(
    canvasSize: Size,
    healthPos: Position,
    pointsPos: Position,
    keyboardMap: KeyboardMap
  ) {
    super();
    this.tmSize = { width: 200, height: 150 };
    this.positions = createPositionsTM(canvasSize, this.tmSize);
    this.facing = facingENUM.RIGHT;
    this.keyboardMap = keyboardMap;
    this.health = 100;
    this.points = 0;
    this.healthBarPos = healthPos;
    this.healthBarSize = { width: this.health, height: 30 };
    this.pointsPosition = pointsPos;
    this.pointsSize = { width: 30, height: 40 };

    this.timbermanImage = new Image();
    this.timbermanImage.src = timbermanSprites;

    this.timbermanDeadImage = new Image();
    this.timbermanDeadImage.src = timbermanRIPSprite;

    this.timbermanStatus = TimbermanStatus.IDDLE;
    this.animationCount = 0;

    this.time = 0;
  }

  update(delta: number) {
    // #region [ STATUS ]
    if (this.timbermanStatus === TimbermanStatus.IDDLE) {
      if (this.animationCount >= NUM_SPRITES) this.animationCount = 0;
    }
    // #endregion

    // #region [ HEALTH]
    if (this.health > 100)
      // -- [ HEALTH ]
      this.health = 100;
    if (this.health < 0) this.health = 0;

    this.health -= HEALTH_DECRESEASE_SPEED * delta;
    // #endregion
  }

  draw(ctx: CanvasRenderingContext2D, delta: number) {
    const curPosition: Position =
      this.facing === facingENUM.LEFT ? this.positions[0] : this.positions[1];

    ctx.save();

    if (this.timbermanStatus === TimbermanStatus.DEAD) {
      ctx.drawImage(
        this.timbermanDeadImage,
        curPosition.x,
        curPosition.y,
        this.tmSize.width / 2,
        this.tmSize.height / 2
      );
    } else {
      const tmStatus: string =
        this.timbermanStatus === TimbermanStatus.IDDLE ? 'breath' : 'chop';

      const animation: string = tmStatus + this.animationCount;

      ctx.drawImage(
        this.timbermanImage,
        framesTimberman[animation].x,
        framesTimberman[animation].y,
        framesTimberman[animation].w,
        framesTimberman[animation].h,
        curPosition.x,
        curPosition.y,
        this.tmSize.width,
        this.tmSize.height
      );

      if (this.facing === facingENUM.RIGHT) {
        ctx.scale(1, -1);
      }

      ctx.restore();

      this.time += delta;
      this.animationCount =
        Math.floor(this.time * NUM_SPRITES * 5) % NUM_SPRITES;
    }
  }

  handleInputDOWN(key: string) {
    const input = this.keyboardMap[key];

    if (input === facingENUM.LEFT) {
      this.timbermanStatus = TimbermanStatus.CHOP;

      this.facing = facingENUM.LEFT;
      this.health += HEALTH_INCRESEASE_SPEED * 0.2;
      this.points++;
    }

    if (input === facingENUM.RIGHT) {
      this.timbermanStatus = TimbermanStatus.CHOP;

      this.facing = facingENUM.RIGHT;
      this.health += HEALTH_INCRESEASE_SPEED * 0.2;
      this.points++;
    }
  }

  handleInputUP(key: string) {
    const input = this.keyboardMap[key];

    if (input === facingENUM.LEFT) this.timbermanStatus = TimbermanStatus.IDDLE;

    if (input === facingENUM.RIGHT)
      this.timbermanStatus = TimbermanStatus.IDDLE;
  }
}

export default Timberman;
