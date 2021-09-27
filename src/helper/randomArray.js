/**
 * Random array generator
 * Generat array with length {length} with values between {min} and {max}
 * {min} and {max} are included
 * @author Aniss Nahim
 * @license MIT
 */

/**
 * Generat random array
 * @param {Integer} length
 * @param {Integer} min
 * @param {Integer} max
 * @returns {Array}
 */
const randomArray = (length, min, max) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return array;
};

export default randomArray;
