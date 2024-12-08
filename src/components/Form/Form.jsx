import { nanoid } from '@reduxjs/toolkit';
import { addToDo } from '../../redux/toDoSlice.js';
import { useDispatch } from 'react-redux';

export const Form = () => {
  const dispatch = useDispatch();
  const hendleSubmit = e => {
    e.preventDefault();
    const obj = { text: e.target.elements.text.value, id: nanoid() };
    const action = addToDo(obj);
    dispatch(action);
    e.target.reset();
  };
  return (
    <form onSubmit={hendleSubmit}>
      <input name="text" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
