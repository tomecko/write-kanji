export const deduplicatePrimitivesArray = (array) => {
  const seen = {};
  return array
    .filter(val => {
      if (!seen[val]) {
        seen[val] = true;
        return true;
      }
      return false;
    });
};
