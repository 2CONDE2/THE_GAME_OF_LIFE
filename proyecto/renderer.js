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

  return { init };
})();

