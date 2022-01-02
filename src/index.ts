import { mapManager, initMapManager } from './managers/MapManager';
import { gameManager, initGameManager } from './managers/GameManager';
import Timberman from './actors/Timberman';
import { mapA } from './utils/keyboard-map';
import Tree from './actors/Tree';
import { Size } from './types/sizes';
import Actor from './actors/Actor';
import { Player } from './types/player';

window.onload = () => {
  const canvas = document.getElementById('canvas-game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const canvasSize: Size = { width: canvas.width, height: canvas.height };

  // [ Init Managers ]
  initMapManager(canvasSize);

  // #region [ Init Actors ]

  // -- Timberman
  const timberman: Timberman = new Timberman(canvasSize, mapA);

  // -- Wooden Tree
  const tree: Tree = new Tree(canvasSize, mapA, 10);
  // #endregion

  const actors: Array<Actor> = [timberman, tree];

  // [ Init Game Manager ]
  const players: Array<Player> = [
    { timberman, tree, keyboardMap: mapA }
    // { timberman2, tree2, keyboardMap: mapB }, // -- In case you want to add another player
  ];
  initGameManager(players);

  // -- Render Loop
  let lastFrame = 0;
  const render = (time: number): void => {
    // -- Get Delta
    const delta = (time - lastFrame) / 1000;
    lastFrame = time;
    // console.log(delta);

    // -- Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameManager.isPlaying) {
      // -- Draw Section
      actors.forEach((actor) => actor.draw(ctx));

      // -- Check players positions
      gameManager.update();
    } else {
      // -- Game Over Message
      ctx.font = '15px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(`Game Over...`, canvasSize.width / 2, canvasSize.height / 2);
    }

    // -- Recurisve
    window.requestAnimationFrame(render);
  };

  // -- Start the game
  window.requestAnimationFrame(render);

  // -- Add Event Listeners
  document.body.addEventListener('keydown', (event) => {
    if (gameManager.isPlaying) {
      actors.forEach((actor) => actor.handleInputDOWN(event.key));
    }
  });
};
