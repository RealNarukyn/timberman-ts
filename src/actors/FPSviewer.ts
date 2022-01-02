import { Position } from '../types/positions';
import Actor from './Actor';

class FPSViewer extends Actor {
  position: Position;

  constructor(position: Position) {
    super();
    this.position = position;
  }

  draw(ctx: CanvasRenderingContext2D, delta: number) {
    const fps = (1 / delta).toFixed(2);
    ctx.font = '15px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`FPS:${fps}`, this.position.x, this.position.y);
  }
}

export default FPSViewer;
