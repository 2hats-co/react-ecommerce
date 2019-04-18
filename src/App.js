import React from 'react';
import Shop from './containers/Shop';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <Route exact path="/" component={Shop} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </Router>
  );
}

export default App;
