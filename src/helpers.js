
// This is a helper for determining if there is an ancestral relationship between two components
export const isDescendant = (parent, child) => {
  let node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
