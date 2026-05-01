const Engine = (() => {

  const create = (cols, rows) =>
    Array.from({ length: rows }, () => Array(cols).fill(0));

  const population = (grid) =>
    grid.reduce((s, row) => s + row.reduce((r, c) => r + c, 0), 0);

  return { create, population };

})();