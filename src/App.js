import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import ShopContainer from './containers/ShopContainer';
import CartContainer from './containers/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer';

import CartContext from './contexts/CartContext';

function App(props) {
  const [cart, setCart] = useState({});
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (itemId, data) => {
    const oldQty = cart[itemId] ? cart[itemId].qty : 0;
    const newCart = { ...cart };
    newCart[itemId] = { qty: oldQty + 1, ...data };
    setCart(newCart);
  };
  const removeFromCart = itemId => {
    if (cart.hasOwnProperty(itemId)) {
      const newCart = { ...cart };
      delete newCart[itemId];
      setCart(newCart);
    }
  };
  const count = Object.keys(cart).reduce((a, c) => a + cart[c].qty, 0);

  return (
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, count }}>
        <Router>
          <Route exact path="/" component={ShopContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/checkout" component={CheckoutContainer} />
        </Router>
      </CartContext.Provider>
    </ThemeProvider>
  );
}

export default App;
