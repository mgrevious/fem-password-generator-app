export type PasswordStrength = 0 | 1 | 2 | 3 | 4;

export type CharacterRestriction = {
  [index: string]: { checked: boolean; label: string };
};

export interface CopyState {
  message: string;
  className: string;
}

export type PasswordPropertyState = {
  passwordLength: number;
  characterRestrictions: CharacterRestriction;
  passwordStrength: PasswordStrength;
};

export const initialPasswordPropertyState: PasswordPropertyState = {
  passwordLength: 8,
  characterRestrictions: {
    includeUpperCase: { checked: true, label: "Include Uppercase Letters" },
    includeLowerCase: { checked: true, label: "Include Lowercase Letters" },
    includeNumbers: { checked: true, label: "Include Numbers" },
    includeSymbols: { checked: true, label: "Include Symbols" },
  },
  passwordStrength: 1,
};
