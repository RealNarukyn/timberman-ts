import { Player } from '../types/player';
import numFrames from '../utils/numbers-frames';

const numbers = require('../../public/GameResources/img/numbers.png');

class GameManager {
  isPlaying: boolean;

  players: Array<Player>;

  pointsImage: HTMLImageElement;

  constructor(players: Array<Player>) {
    this.isPlaying = true;
    this.players = players;

    this.pointsImage = new Image();
    this.pointsImage.src = numbers;
  }

  update() {
    this.players.forEach((player: Player) => {
      // -- Player arrives at 0 Health
      if (player.timberman.health <= 0) {
        this.isPlaying = false;
        player.timberman.health = 0;
      }

      // -- Player Collides With Branch
      if (player.timberman.facing === player.tree.woodenLogs[0].branchFacing) {
        this.isPlaying = false;
      }
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.players.forEach((player: Player) => {
      // #region [ Draw Timberman Health ]
      ctx.save();
      ctx.fillStyle = 'orange';
      ctx.fillRect(
        player.timberman.healthBarPos.x,
        player.timberman.healthBarPos.y,
        player.timberman.health,
        player.timberman.healthBarSize.height
      );
      ctx.restore();
      // #endregion

      // #region [ Draw Timberman Points ]
      const strPoints: string[] = player.timberman.points.toString().split('');
      if (strPoints.length === 1) {
        const curNumber: { x: number; y: number; w: number; h: number } =
          numFrames[`number0${player.timberman.points.toString()}`];

        ctx.drawImage(
          this.pointsImage,
          curNumber.x,
          curNumber.y,
          curNumber.w,
          curNumber.h,
          player.timberman.pointsPosition.x,
          player.timberman.pointsPosition.y,
          player.timberman.pointsSize.width,
          player.timberman.pointsSize.height
        );
      } else {
        strPoints.forEach((e, index) => {
          const curNumber: { x: number; y: number; w: number; h: number } =
            numFrames[`number0${e}`];

          ctx.drawImage(
            this.pointsImage,
            curNumber.x,
            curNumber.y,
            curNumber.w,
            curNumber.h,
            player.timberman.pointsPosition.x +
              index * player.timberman.pointsSize.width,
            player.timberman.pointsPosition.y,
            player.timberman.pointsSize.width,
            player.timberman.pointsSize.height
          );
        });
      }
      // #endregion
    });
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let gameManager: GameManager;

export const initGameManager = (players: Array<Player>) => {
  gameManager = new GameManager(players);
};
