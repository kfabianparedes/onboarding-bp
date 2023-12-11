export const isObject = (element: Object) => {
  return typeof element === 'object' && element !== null && Object.prototype.toString.call(element) === '[object Object]';
};

export const isArray = (element: Object) => {
  return typeof element === 'object' && element !== null && Object.prototype.toString.call(element) === '[object Array]';
};