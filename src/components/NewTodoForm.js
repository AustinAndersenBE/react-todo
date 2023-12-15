import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function NewTodoForm() {
  const [task, setTask] = useState(''); //task is type string
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask('');
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;