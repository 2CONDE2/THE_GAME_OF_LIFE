const Renderer = (() => {
  const CELL = 13;
  const GAP  = 1;
  const C_ALIVE = '#dde8ff';
  const C_DEAD  = '#111118';

  let canvas, ctx, cols, rows; // Añadimos cols y rows

  const init = (el) => {
    canvas = el;
    ctx = canvas.getContext('2d');
    resize();
  };

  const resize = () => {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    cols = Math.floor(canvas.width  / CELL); // Calculamos cols
    rows = Math.floor(canvas.height / CELL); // Calculamos rows
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

  const getDimensions = () => ({ cols, rows }); // Nueva función

  return { init, resize, draw, getDimensions }; // Exponemos las nuevas funciones
})();
