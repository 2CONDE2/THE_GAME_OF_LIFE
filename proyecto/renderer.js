const Renderer = (() => {
  const CELL = 13;
  const GAP  = 1;
  const C_ALIVE = '#dde8ff';
  const C_DEAD  = '#111118';

  let canvas, ctx, cols, rows;

  const init = (el) => {
    canvas = el;
    ctx = canvas.getContext('2d');
    resize();
  };

  const resize = () => {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols = Math.floor(canvas.width  / CELL);
    rows = Math.floor(canvas.height / CELL);
  };

  const draw = (grid) => {
    ctx.fillStyle = C_DEAD;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = C_ALIVE;
    const maxY = Math.min(rows, grid.length); // Límite para Y
    for (let y = 0; y < maxY; y++) {
      const maxX = Math.min(cols, grid[y].length); // Límite para X
      for (let x = 0; x < maxX; x++) {
        if (grid[y][x])
          ctx.fillRect(x * CELL + GAP, y * CELL + GAP, CELL - GAP, CELL - GAP);
      }
    }
  };

  const getDimensions = () => ({ cols, rows });

  return { init, resize, draw, getDimensions };
})();
