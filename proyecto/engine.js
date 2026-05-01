const Engine = (() => {

  const create = (cols, rows) =>
    Array.from({ length: rows }, () => Array(cols).fill(0));

  const randomize = (grid, p = 0.28) =>
    grid.map(row => row.map(() => +(Math.random() < p)));

  const clear = (grid) =>
    grid.map(row => row.map(() => 0));

  const population = (grid) =>
    grid.reduce((s, row) => s + row.reduce((r, c) => r + c, 0), 0);

  return { create, randomize, clear, population };

})();