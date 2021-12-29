import { mapManager, initMapManager } from './managers/MapManager';
import Timberman from './actors/timberman';
import WoodenLog from './actors/wooden-log';
import { Position } from './types/positions';
import { mapA } from './utils/keyboard-map';

window.onload = () => {
  const canvas = document.getElementById('canvas-game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  // -- Init Managers
  initMapManager(canvas.width);
  console.log('The Map is divided horizontally in:', mapManager.points);

  // -- Init Actors
  // #region [ Timberman ]
  const tmPosLeft: Position = {
    x: mapManager.points[1].start + mapManager.pointsWidth / 2,
    y: canvas.height - 150
  };
  const tmPosRight: Position = {
    x: mapManager.points[3].start + mapManager.pointsWidth / 2,
    y: canvas.height - 150
  };
  const timberman: Timberman = new Timberman([tmPosLeft, tmPosRight], mapA);
  // #endregion

  // #region [ Wooden Tree ]
  const woodenTree: Array<WoodenLog> = [];
  for (let i = 0; i < 10; i++) {
    const wlPos: Position = {
      x: mapManager.points[2].start + mapManager.pointsWidth / 2,
      y: canvas.height - 150 - i * 110
    };

    woodenTree.push(new WoodenLog(wlPos, i === 0));
  }
  // #endregion

  // -- Render Loop
  let lastFrame = 0;
  const render = (time: number): void => {
    // -- Get Delta
    const delta = (time - lastFrame) / 1000;
    lastFrame = time;
    // console.log(delta);

    // -- Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // -- Draw Elements
    timberman.draw(ctx);
    woodenTree.forEach((e) => {
      e.draw(ctx);
    });

    // -- Recurisve
    window.requestAnimationFrame(render);
  };

  // -- Start the game
  window.requestAnimationFrame(render);

  // -- Add Event Listeners
  document.body.addEventListener('keydown', (event) => {
    timberman.handleInputDOWN(event.key);
  });
};
