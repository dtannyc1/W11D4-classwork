import { useState, useEffect } from 'react';
import { removeFromStore, incrementItem, decrementItem, emptyCart } from '../../store/cart';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => dispatch(incrementItem(item))}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(decrementItem(item))}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromStore(item))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
