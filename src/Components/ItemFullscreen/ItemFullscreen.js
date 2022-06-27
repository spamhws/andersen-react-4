import React from 'react';
import styles from './ItemFullscreen.module.css';
import { useRef } from 'react';

import { useLocation } from 'react-router-dom';

function ItemFullscreen({ isLoggedIn, addItemToCart }) {
  const amountRef = useRef(null);
  let product = useLocation().state;
  let buttonText = isLoggedIn ? 'Add to Cart' : 'Log in to use the cart';

  const onClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      addItemToCart(product.id, product.price, amountRef.current.value);
    }
  };

  return (
    <div className={styles.itemFullscreen}>
      <img src={product.images[0]} alt='product_image' />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className={styles.cartButton}>
          <input type='number' defaultValue='1' ref={amountRef} />
          <button
            className={isLoggedIn ? '' : styles.disabled}
            onClick={(e) => {
              onClick(e);
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemFullscreen;
