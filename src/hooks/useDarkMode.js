import { useSelector } from 'react-redux';
import { selectMode } from '../redux/global/selectors';

export const useDarkMode = () => {
  const mode = useSelector(selectMode);

  return { mode };
};
