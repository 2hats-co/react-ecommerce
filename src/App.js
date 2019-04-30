import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

import ShopContainer from './containers/ShopContainer';
import CartContainer from './containers/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer';

function App(props) {
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
