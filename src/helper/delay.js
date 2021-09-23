/**
 * Delay instruction
 */

let clock = 1;
let processedAnimation = 0;

const delay = (animation, speed, setArraySnapshot) => (params, array) => {
  setTimeout(() => {
    animation(params);
    if (array) {
      setArraySnapshot(array);
    }
    processedAnimation--;
  }, clock * speed);
  clock++;
};

export default delay;
