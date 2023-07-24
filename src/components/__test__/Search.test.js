import "@testing-library/jest-dom"
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Body from '../body';
import { StaticRouter } from 'react-router-dom/server';
import store from '../../utils/store';
import { RESTAURANT_DATA } from '../../mocks/data';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test('shimmer should load on homepage', () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer=body.getByTestId("shimmer")
  expect(shimmer.children.length).toBe(15);
  console.log(shimmer);
});
test('restaurant should load on homepage', async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );
    await waitFor(()=> expect(body.getByTestId("search-btn")))
    const resList=body.getByTestId("res-list")
    expect(resList.children.length).toBe(15);
    console.log(resList);
  });
