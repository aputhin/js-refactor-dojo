export const add = (a, b) => {
  return Number(a) + Number(b);
}

export const sub = (a, b) => {
  return Number(a) - Number(b);
}

export const factorial = (a) => {
  if (a < 0) {
    throw new RangeError('negatives are forbidden!');
  } else {
    if (a == 0) {
      return 1;
    } else {
      if (a == 1) {
        return 1;
      } else {
        if (a > 1) {
          return a * factorial(a - 1);
        }
      }
    }
  }
}
