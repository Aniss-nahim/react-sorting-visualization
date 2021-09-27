/**
 * Delay animation using setTimeout async function
 * Will the main array is getting sorted, delayAnimation()
 * function will get a snapshot of the main array
 */

const delayAnimation =
  (setAnimation, delay, setArraySnapshot, setClock) => (params, array) => {
    const arraySnapshot = [...array];
    setTimeout(() => {
      setAnimation(params);
      setArraySnapshot(arraySnapshot);
    }, delay);
    setClock((lastClock) => lastClock + 1);
  };

export default delayAnimation;
