import React from "react";
import { PasswordStrength } from "../../context/helpers";

interface Props {
  strength: PasswordStrength;
}

const barColors = new Map<number, string>([
  [1, "bg-error"],
  [2, "bg-tangerine"],
  [3, "bg-mustard"],
  [4, "bg-primary"],
]);

const StrengthBars: React.FC<Props> = ({ strength }) => {
  return (
    <div className="flex gap-x-1.5">
      {Array(4)
        .fill("")
        .map((_, index) => {
          if (strength && barColors.has(strength) && index < strength) {
            return (
              <div
                key={index}
                className={`w-[10px] border-2 border-off-white ${barColors.get(
                  strength
                )}`}
              ></div>
            );
          }
          return (
            <div
              key={index}
              className="w-[10px] border-2 border-off-white"
            ></div>
          );
        })}
    </div>
  );
};

export default StrengthBars;
