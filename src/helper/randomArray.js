/**
 * Random array generator
 */

const randomArray = (length, min, max) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = Math.floor(Math.random() * (max - min) + min);
  }
  return array;
};

export default randomArray;
