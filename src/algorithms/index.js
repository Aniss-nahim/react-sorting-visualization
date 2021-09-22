/**
 * Sorting algorithms services
 * @author Aniss Nahim
 * @license MIT
 */

export const quikSort = (array, speed, animationEffect) => {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      animationEffect(array[i]);
      console.log("waiting : " + i * speed);
    }, i * speed);
  }
};
