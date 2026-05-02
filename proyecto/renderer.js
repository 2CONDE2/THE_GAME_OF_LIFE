const Renderer = (() => {
  const CELL = 13;
  const GAP  = 1;
  const C_ALIVE = '#dde8ff';
  const C_DEAD  = '#111118';

  let canvas, ctx;

  const init = (el) => {
    canvas = el;
    ctx = canvas.getContext('2d');
    resize();
  };

  const resize = () => {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  const draw = (grid) => {
    ctx.fillStyle = C_DEAD;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = C_ALIVE;
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
        if (grid[y][x])
          ctx.fillRect(x * CELL + GAP, y * CELL + GAP, CELL - GAP, CELL - GAP);
      }
    }
  };

  return { init, draw }; // Añadimos draw a los métodos públicos
})();
