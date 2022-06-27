import React from 'react';
import styles from './CartMin.module.css';

function CartMin({ isLoggedIn, cart }) {
  if (!isLoggedIn) return null;

  let amount = 0,
    sum = 0;

  cart.items.forEach((item, index) => {
    amount += item.amount;
    sum += item.amount * item.price;
  });

  return (
    <div className={styles.cartMin}>
      <p>
        {amount} items in the cart. Total: ${sum}
      </p>
    </div>
  );
}

export default CartMin;
