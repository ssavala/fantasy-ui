/* eslint-disable prefer-arrow/prefer-arrow-functions */
export function sortAccessor(obj, path) {
  return path.split('.').reduce((o, p) => o && o[p], obj);
}
