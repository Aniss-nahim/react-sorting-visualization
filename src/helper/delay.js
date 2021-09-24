/**
 * Delay instruction
 */

let clock = 1;

const delay = (animation, speed, setArraySnapshot) => (params, array) => {
  setTimeout(() => {
    animation(params);
    if (array) {
      setArraySnapshot(array);
    }
  }, clock * speed);
  clock++;
};

export default delay;
