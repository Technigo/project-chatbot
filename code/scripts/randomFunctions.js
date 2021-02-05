// RNG functions (used throughout the project)
export const d20 = () => {
  return Math.floor(Math.random() * 20 + 1);
};
export const d10 = () => {
  return Math.floor(Math.random() * 10 + 1);
};
export const d8 = () => {
  return Math.floor(Math.random() * 8 + 1);
};
export const d6 = () => {
  return Math.floor(Math.random() * 6 + 1);
};
export const d4 = () => {
  return Math.floor(Math.random() * 4 + 1);
};
export const random = (maxNumber) => {
  return Math.floor(Math.random() * maxNumber);
};
