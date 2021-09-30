/**
 * Delay using setTimeout async function
 */

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
