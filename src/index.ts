window.onload = () => {
  const canvas = document.getElementById('canvas-game') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  let lastFrame = 0;
  const render = (time: number): void => {
    const delta = (time - lastFrame) / 1000;
    lastFrame = time;
    console.log(delta);

    // -- Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();

    ctx.fillStyle = 'red';
    ctx.lineWidth = 4;

    const position = { x: canvas.width / 2 - 50, y: canvas.height / 2 - 50 };
    ctx.rect(position.x, position.y, 100, 100);

    ctx.stroke();
    ctx.fill();

    ctx.restore();

    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);
};
