import React, { useState, useEffect } from 'react';

function ShopItem(props) {
  const { title, description, price } = props;
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 5) {
      alert('It is greater than five!');
    }
  }, [count]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <input type="text" value={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {count > 0 && <button>Buy</button>}
    </div>
  );
}

export default ShopItem;
