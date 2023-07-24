import Header from '../Header';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import store from '../../utils/store';

test('logo should load on rendering header', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getByTestId('logo');
  console.log(logo);
  expect(logo.src).toBe('http://localhost/dummy.png');
});
test('online status should be green on rendering header', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId('online-status');
  expect(onlineStatus.innerHTML).toBe('✅');
});
test('cart item should be zero', () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cartItems = header.getByTestId('cart-items');
  expect(cartItems.innerHTML).toBe('Cart 0');
});
