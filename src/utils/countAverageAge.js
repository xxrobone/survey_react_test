export const countAverageAge = (amount, total) => {
  if (isNaN(amount) || isNaN(total) || amount === 0 || total === 0) {
    console.error(
      'countAverageAge function requires valid non-zero numbers as arguments.'
    );
    return 0;
  }

  return Math.round(total / amount);
};
