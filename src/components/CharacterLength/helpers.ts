export const getPasswordStrength = (length: number) => {
  if (length < 10) {
    return 1;
  }
  if (length < 12) {
    return 2;
  }
  if (length < 16) {
    return 3;
  }
  return 4;
};
