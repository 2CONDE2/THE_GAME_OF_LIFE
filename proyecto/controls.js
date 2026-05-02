const Controls = (() => {
  const setPlaying = (playing) => {
    document.getElementById('btn-play').textContent = playing ? '⏸' : '▶';
  };

  return { setPlaying };
})();

