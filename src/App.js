import React from 'react';
import ShopItem from './ShopItem';

function App(props) {
  return (
    <ShopItem
      title="This is a title"
      description="description here"
      price={200 + 100}
    />
  );
}

export default App;
