/**
 * Delay animation using setTimeout async function
 * Will the main array is getting sorted, delayAnimation()
 * function will get a snapshot of the main array
 */

export let clock = 1;

export const delayAnimation =
  (setAnimation, speed, setArraySnapshot) => (params, array) => {
    const arraySnapshot = [...array];
    setTimeout(() => {
      setAnimation(params);
      setArraySnapshot(arraySnapshot);
    }, clock++ * speed);
  };
