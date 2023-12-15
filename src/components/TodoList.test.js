import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TodoList from './TodoList';

const mockStore = configureMockStore();
const store = mockStore({
  todos: [
    { id: '1', task: 'Test task 1' },
    { id: '2', task: 'Test task 2' },
  ],
});

//Smoke Test
test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  const formElement = screen.getByText("Add Todo");
  expect(formElement).toBeInTheDocument();
});

//Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

//Business Logic Test
test('renders todos from state', () => {
  render(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  // Check if the todos from state are rendered
  const todo1 = screen.getByText('Test task 1');
  const todo2 = screen.getByText('Test task 2');
  expect(todo1).toBeInTheDocument();
  expect(todo2).toBeInTheDocument();
})