import { Player } from '../types/player';

class GameManager {
  isPlaying: boolean;

  players: Array<Player>;

  constructor(players: Array<Player>) {
    this.isPlaying = true;
    this.players = players;
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
}

// eslint-disable-next-line import/no-mutable-exports
export let gameManager: GameManager;

export const initGameManager = (players: Array<Player>) => {
  gameManager = new GameManager(players);
};
