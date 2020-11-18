/**
 * @format
 */
import React from 'react';
import 'react-native';
import { Provider } from 'react-redux';
import renderer, { act } from 'react-test-renderer';
import App from '../src/App';
import store from '../src/store/store';

describe('<App />', () => {
  it('renders correctly', async () => {
    jest.useFakeTimers();
    await act(async () => {
      const result = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(result).toBeTruthy();
    });
  });
});
