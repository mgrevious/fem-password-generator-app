export type PasswordStrength = 0 | 1 | 2 | 3 | 4;

export type CharacterRestriction = {
  [index: string]: { checked: boolean; label: string };
};

export type PasswordPropertyState = {
  characterLength: number;
  characterRestrictions: CharacterRestriction;
  passwordStrength: PasswordStrength;
};

export const initialPasswordPropertyState: PasswordPropertyState = {
  characterLength: 0,
  characterRestrictions: {
    includeUpperCase: { checked: false, label: "Include Uppercase Letters" },
    includeLowerCase: { checked: false, label: "Include Lowercase Letters" },
    includeNumbers: { checked: false, label: "Include Numbers" },
    includeSymbols: { checked: false, label: "Include Symbols" },
  },
  passwordStrength: 3,
};
