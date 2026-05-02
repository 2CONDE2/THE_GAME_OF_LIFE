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
  
  /* ── Actions ── */

  const togglePlay = () => {
    playing = !playing;
    Controls.setPlaying(playing);
    if (playing) {
      Sound.play();
      lastTs = null;
      rafId = requestAnimationFrame(_loop);
    } else {
      Sound.pause();
      cancelAnimationFrame(rafId);
    }
  };

  const step = () => { if (!playing) { Sound.btnClick(); _step(); } };

  const randomize = () => {
    Sound.randomize();
    const { cols, rows } = Renderer.getDimensions();
    grid = Engine.randomize(Engine.create(cols, rows));
    gen  = 0;
    _render();
  };

  const clear = () => {
    Sound.clear();
    playing = false;
    Controls.setPlaying(false);
    cancelAnimationFrame(rafId);
    grid = Engine.clear(grid);
    gen  = 0;
    _render();
  };

  const handleToggle = (e) => {
    const { x, y } = Renderer.cellAt(e.clientX, e.clientY);
    const wasAlive = grid[y] && grid[y][x];
    grid = Engine.toggle(grid, x, y);
    if (wasAlive) Sound.cellDied(); else Sound.cellBorn();
    _render();
  };