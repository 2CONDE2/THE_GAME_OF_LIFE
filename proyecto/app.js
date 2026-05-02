// app.js — Entry point: wires Engine, Renderer and Controls together

const App = (() => {

  let grid, gen, playing, speed, rafId, lastTs;

  const _render = () => {
    Renderer.draw(grid);
    Controls.updateStats(gen, Engine.population(grid));
  };

  const _step = () => {
    grid = Engine.step(grid);
    gen++;
    Sound.tick();
    _render();
  };

  const _loop = (ts) => {
    if (!playing) return;
    if (!lastTs || ts - lastTs >= 1000 / speed) {
      _step();
      lastTs = ts;
    }
    rafId = requestAnimationFrame(_loop);
  };