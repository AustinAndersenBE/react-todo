import { useSelector } from 'react-redux';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <NewTodoForm />
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} task={todo.task} />
      ))}
    </div>
  );
}

export default TodoList;