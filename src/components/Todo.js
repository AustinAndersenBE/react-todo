import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

function Todo({ id, task }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <span>{task}</span>
      <button onClick={handleRemove}>X</button>
    </div>
  );
}

export default Todo;