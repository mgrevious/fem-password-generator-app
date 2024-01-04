import { useContext } from 'react';
import { produce } from 'immer';
import { AppContext } from '../../context/AppContext';
import { getPasswordStrength } from './helpers';

const CharacterLength = () => {
  const { passwordProperties, setPasswordProperties } = useContext(AppContext);
  const { passwordLength } = passwordProperties;
  const range = 256 - 8;
  const gradientStart = Math.floor((passwordLength / range) * 100) - 2;
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <label className="text-[18px]" htmlFor="passwordLength">
          Character Length
        </label>
        <span className="font-bold text-[32px] text-primary">
          {passwordLength}
        </span>
      </div>
      <input
        className="w-full mb-4"
        style={{
          background: `linear-gradient(90deg, rgba(164,255,175,1) ${gradientStart}%, rgba(24,23,31,1) ${gradientStart}%)`,
        }}
        type="range"
        id="passwordLength"
        name="passwordLength"
        value={passwordLength}
        min="8"
        max="256"
        onChange={(e) => {
          let updatedState = produce(passwordProperties, (state) => {
            state.passwordLength = e.target.valueAsNumber;
          });
          setPasswordProperties(updatedState);

          updatedState = produce(updatedState, (state) => {
            state.passwordStrength = getPasswordStrength(state.passwordLength);
          });

          setPasswordProperties(updatedState);
        }}
      />
    </div>
  );
};

export default CharacterLength;
