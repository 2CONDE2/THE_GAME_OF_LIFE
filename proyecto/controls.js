const Controls = (() => {
  let _drawing = false;

  const bind = ({ onPlay, onStep, onRandom, onClear, onToggle, onSpeed }) => {
    document.getElementById('btn-play').addEventListener('click', onPlay);
    document.getElementById('btn-step').addEventListener('click', onStep);
    document.getElementById('btn-random').addEventListener('click', onRandom);
    document.getElementById('btn-clear').addEventListener('click', onClear);
    document.getElementById('speed').addEventListener('input', e => onSpeed(+e.target.value));

    const canvas = document.getElementById('canvas');
    canvas.addEventListener('mousedown', e => {
      _drawing = true;
      onToggle(e);
    });
    canvas.addEventListener('mousemove', e => {
      if (_drawing) onToggle(e);
    });
  };

  const setPlaying = (playing) => {
    document.getElementById('btn-play').textContent = playing ? '⏸' : '▶';
  };

  const updateStats = (gen, pop) => {
    document.getElementById('gen').textContent = gen;
    document.getElementById('pop').textContent = pop;
  };

  return { bind, setPlaying, updateStats };
})();
