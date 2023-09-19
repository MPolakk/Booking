import { modeType, useDarkMode } from '../../../hooks';
import {
  SwitchBar,
  SwitchContainer,
  SwitchInput,
} from './SwitchDarkMode.styled';
import { useState } from 'react';

export const SwitchDarkMode = ({ width = 40, height = 20 }) => {
  const [checked, setChecked] = useState(false);
  const { setMode } = useDarkMode();

  const handleChecked = value => {
    setChecked(value);
    if (!value) {
      setMode(modeType.dark);
      return;
    }
    setMode(modeType.light);
  };

  return (
    <form>
      <SwitchContainer width={width} height={height}>
        <SwitchInput
          checked={checked}
          onChange={e => handleChecked(e.target.checked)}
        />
        <SwitchBar checked={checked} height={height} width={width} />
      </SwitchContainer>
    </form>
  );
};
