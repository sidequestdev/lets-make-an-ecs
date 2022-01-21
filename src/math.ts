/**
 * Clamp `value` to `min` and `max`
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/**
 * Get a random number between `min` and `max`
 * @param max
 * @param min
 */
export const getRandom = (max: number, min = 0) =>
  Math.floor(Math.random() * max) + min;
