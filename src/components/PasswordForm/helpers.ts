import {
  CharacterRestriction,
  PasswordPropertyState,
} from "../../context/helpers";

export const containsInvalidSymbols = (password: string) =>
  password.split("").some((char) => " (){}[]|\\'\"~`/<>,.".includes(char));

// const characters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!@#$%^&*_+-=";

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "?!@#$%^&*_+-=";

export const generateString = (
  restrictions: CharacterRestriction,
  length: number
) => {
  if (length === undefined || length <= 0 || !restrictions) {
    return "";
  }

  let result = "";
  let characters = "";

  if (restrictions.includeLowerCase.checked) {
    characters += lowercase;
  }
  if (restrictions.includeUpperCase.checked) {
    characters += uppercase;
  }
  if (restrictions.includeNumbers.checked) {
    characters += numbers;
  }
  if (restrictions.includeSymbols.checked) {
    characters += symbols;
  }

  if (!characters) return "";

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

const noRestrictionsExist = (restrictions: CharacterRestriction) => {
  const { includeLowerCase, includeUpperCase, includeNumbers, includeSymbols } =
    restrictions;
  return (
    !includeLowerCase.checked &&
    !includeUpperCase.checked &&
    !includeNumbers.checked &&
    !includeSymbols.checked
  );
};

export const validateRestrictions = (passwordState: PasswordPropertyState) =>
  noRestrictionsExist(passwordState.characterRestrictions)
    ? "At least one checkbox must be selected."
    : "";
