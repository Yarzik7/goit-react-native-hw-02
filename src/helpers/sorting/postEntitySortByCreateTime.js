export const postEntitySortByCreateTime = (array, direction = 'down') => {
  const directions = {
    down: (el, nextEl) => nextEl - el,
    up: (el, nextEl) => el - nextEl,
  };

  return [...array].sort(({ createTime }, { createTime: createTimeNext }) =>
    directions[direction](createTime, createTimeNext)
  );
};
