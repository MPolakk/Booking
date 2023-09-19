import { useDispatch } from 'react-redux';
import { modeType, setMode } from '../../../redux';
import {
  SwitchBar,
  SwitchContainer,
  SwitchInput,
} from './SwitchDarkMode.styled';
import { useState } from 'react';

export const SwitchDarkMode = ({ width = 40, height = 20 }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleChecked = value => {
    setChecked(value);
    if (value) {
      dispatch(setMode(modeType.light));
    } else {
      dispatch(setMode(modeType.dark));
    }
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
