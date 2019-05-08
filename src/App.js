import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import ShopContainer from './containers/ShopContainer';
import CartContainer from './containers/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer';

function App(props) {
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  // const addToCart = itemId => {
  //   const oldQty = cart[itemId] || 0;
  //   const newCart = { ...cart };
  //   newCart[itemId] = oldQty + 1;
  //   setCart(newCart);
  // };
  // const removeFromCart = itemId => {
  //   if (cart.hasOwnProperty(itemId)) {
  //     const newCart = { ...cart };
  //     delete newCart[itemId];
  //     setCart(newCart);
  //   }
  // };
  // const count = Object.keys(cart).reduce((a, c) => a + cart[c], 0);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={ShopContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={CheckoutContainer} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
