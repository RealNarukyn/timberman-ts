import { mapManager, initMapManager } from './managers/MapManager';
import Timberman from './actors/timberman';
import { mapA } from './utils/keyboard-map';
import Tree from './actors/tree';
import { Size } from './types/sizes';
import Actor from './actors/actor';

window.onload = () => {
  const canvas = document.getElementById('canvas-game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  const canvasSize: Size = { width: canvas.width, height: canvas.height };

  // #region [ Init Managers ]
  initMapManager(canvasSize);
  // #endregion

  // #region [ Init Actors ]

  // -- Timberman
  const timberman: Timberman = new Timberman(canvasSize, mapA);

  // -- Wooden Tree
  const tree: Tree = new Tree(canvasSize, mapA, 10);
  // #endregion

  const actors: Array<Actor> = [timberman, tree];

  // -- Render Loop
  let lastFrame = 0;
  const render = (time: number): void => {
    // -- Get Delta
    const delta = (time - lastFrame) / 1000;
    lastFrame = time;
    console.log(delta);

    // -- Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mapManager.points.forEach((point) => {
      ctx.save();

      ctx.fillStyle = 'red';

      ctx.fillRect(
        point.start,
        canvas.height / 2,
        point.end - point.start - 1,
        100
      );

      ctx.restore();
    });

    // -- Draw Section
    actors.forEach((actor) => actor.draw(ctx));

    // -- Recurisve
    window.requestAnimationFrame(render);
  };

  // -- Start the game
  window.requestAnimationFrame(render);

  // -- Add Event Listeners
  document.body.addEventListener('keydown', (event) => {
    actors.forEach((actor) => actor.handleInputDOWN(event.key));
  });
};
