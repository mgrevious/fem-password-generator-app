export type PasswordStrength = 0 | 1 | 2 | 3 | 4;

export type PasswordProperties = {
  characterLength: number;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  passwordStrength: PasswordStrength;
};

export const initialProperties: PasswordProperties = {
  characterLength: 0,
  includeUpperCase: false,
  includeLowerCase: false,
  includeNumbers: false,
  includeSymbols: false,
  passwordStrength: 0,
};
