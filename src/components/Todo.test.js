import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Todo from './Todo';

const mockStore = configureMockStore();
const store = mockStore({});

//Smoke Test
test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <Todo id="1" task="Test task" />
    </Provider>
  );
  const taskElement = screen.getByText("Test task");
  expect(taskElement).toBeInTheDocument();
});

//Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Todo id="1" task="Test task" />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

//Business Logic Test
test('dispatches action on button click', () => {
  render(
    <Provider store={store}>
      <Todo id="1" task="Test task" />
    </Provider>
  );

  // Click the button
  fireEvent.click(screen.getByText('X'));

  // Check if the correct action was dispatched
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'todos/removeTodo',
    payload: '1',
  });
});