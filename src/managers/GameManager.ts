import { Player } from '../types/player';
import { framesNumbers } from '../utils/numbers-frames';
import { mapManager } from './MapManager';

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
      strPoints.forEach((e, index) => {
        const curNumber: { x: number; y: number; w: number; h: number } =
          framesNumbers[`number${e}`];

        ctx.save();
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
        ctx.restore();
      });
      // #endregion
    });
  }

  drawGameOver(ctx: CanvasRenderingContext2D) {
    const player = this.players[0];

    // -- Dead Player Sprite
    ctx.save();
    ctx.drawImage(
      player.timberman.timbermanDeadImage,
      mapManager.canvasSize.width / 2 - 125,
      mapManager.canvasSize.height - (player.timberman.tmSize.height + 70),
      player.timberman.tmSize.width,
      player.timberman.tmSize.height
    );
    ctx.restore();

    // -- Player Points
    ctx.save();

    const strPoints: string[] = player.timberman.points.toString().split('');

    strPoints.forEach((e, index) => {
      const curNumber: { x: number; y: number; w: number; h: number } =
        framesNumbers[`number${e}`];

      ctx.save();
      ctx.drawImage(
        this.pointsImage,
        curNumber.x,
        curNumber.y,
        curNumber.w,
        curNumber.h,
        mapManager.canvasSize.width / 2 -
          50 +
          index * player.timberman.pointsSize.width,
        mapManager.canvasSize.height / 2 - 100,
        player.timberman.pointsSize.width,
        player.timberman.pointsSize.height
      );
      ctx.restore();
    });
    ctx.restore();

    // -- Game Over Text
    ctx.save();
    ctx.font = '68px PixelGameFont';
    ctx.fillStyle = 'black';
    ctx.fillText(
      `GAME OVER...`,
      mapManager.canvasSize.width / 2 - 220,
      mapManager.canvasSize.height / 2 - 124
    );
    ctx.restore();
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let gameManager: GameManager;

export const initGameManager = (players: Array<Player>) => {
  gameManager = new GameManager(players);
};
