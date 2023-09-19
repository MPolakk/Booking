import { useSelector } from 'react-redux';
import { selectMode } from '../redux/global/selectors';

export const useGlobal = () => {
  const mode = useSelector(selectMode);

  return { mode };
};
