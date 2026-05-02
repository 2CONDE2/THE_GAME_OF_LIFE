const Renderer = (() => {
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
