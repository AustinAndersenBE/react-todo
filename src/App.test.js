import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Smoke Test
test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

// Snapshot Test
test('matches snapshot', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});