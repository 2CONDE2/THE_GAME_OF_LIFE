const Controls = (() => {
  const setPlaying = (playing) => {
    document.getElementById('btn-play').textContent = playing ? '⏸' : '▶';
  };

  const updateStats = (gen, pop) => {
    document.getElementById('gen').textContent = gen;
    document.getElementById('pop').textContent = pop;
  };

  return { setPlaying, updateStats };
})();


