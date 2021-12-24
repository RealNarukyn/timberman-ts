import Timberman from './actors/timberman';
import { Position } from './types/positions';

window.onload = () => {
  const canvas = document.getElementById('canvas-game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  const tmPos: Position = {
    x: canvas.width / 2 - 50,
    y: canvas.height / 2 - 50
  };
  const timberman: Timberman = new Timberman(tmPos);

  let lastFrame = 0;
  const render = (time: number): void => {
    const delta = (time - lastFrame) / 1000;
    lastFrame = time;
    console.log(delta);

    // -- Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    timberman.draw(ctx);

    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
};
