import { Manager, initGameManager } from './managers/GameManager';
import Timberman from './actors/timberman';
import WoodenLog from './actors/wooden-log';
import { Position } from './types/positions';

window.onload = () => {
  const canvas = document.getElementById('canvas-game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  // -- Init Managers
  initGameManager(canvas.width);
  console.log('The Map is divided horizontally in:', Manager.points);

  // -- Init Actors
  const tmPos: Position = {
    x: canvas.width / 2 - 50,
    y: canvas.height - 150
  };
  const timberman: Timberman = new Timberman(tmPos);

  const woodenTree: Array<WoodenLog> = [];
  for (let i = 1; i <= 10; i++) {
    const wlPos: Position = {
      x: canvas.width / 2 - 50,
      y: canvas.height - 200 - i * 60
    };

    woodenTree.push(new WoodenLog(wlPos, i === 0));
  }

  // -- Render Loop
  let lastFrame = 0;
  const render = (time: number): void => {
    // -- Get Delta
    const delta = (time - lastFrame) / 1000;
    lastFrame = time;
    console.log(delta);

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

  window.requestAnimationFrame(render);
};
