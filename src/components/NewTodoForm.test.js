import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const mockStoreInstance = mockStore({});

//Smoke Test
test('renders without crashing', () => {
  render(
    <Provider store={mockStoreInstance}>
      <NewTodoForm />
    </Provider>
  );
  const formElement = screen.getByText("Add Todo");
  expect(formElement).toBeInTheDocument();
});

//Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={mockStoreInstance}>
      <NewTodoForm />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

//Business Logic Test
test('dispatches action on form submission', () => {
  render(
      <Provider store={mockStoreInstance}>
          <NewTodoForm />
      </Provider>
  );

  // Fill out the form
  fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'New task' },
  });

  // Submit the form
  fireEvent.click(screen.getByText('Add Todo'));

  // Check if the correct action was dispatched
  const actions = mockStoreInstance.getActions();
  expect(actions[0]).toEqual({
      type: 'todos/addTodo',
      payload: 'New task',
  });
});