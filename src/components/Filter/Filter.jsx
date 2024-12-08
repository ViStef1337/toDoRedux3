import { setFilter } from '../../redux/filterSlice.js';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const hendleChange = e => {
    const action = setFilter(e.target.value);
    dispatch(action);
  };
  return <input onChange={hendleChange} type="text" name="text" />;
};
