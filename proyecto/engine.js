const Engine = (() => {

  const create = (cols, rows) =>
    Array.from({ length: rows }, () => Array(cols).fill(0));

  return { create };

})();