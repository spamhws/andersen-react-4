import React from 'react';
import styles from './ItemCard.module.css';

function ItemCard({ product, addItemToCart, isLoggedIn }) {
  let buttonText = isLoggedIn ? 'Add to Cart' : 'Log in to use the cart';

  const onClick = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      addItemToCart(product.id, product.price, 1);
    }
  };
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt='product_image' />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button
        className={isLoggedIn ? '' : styles.disabled}
        onClick={(e) => {
          onClick(e);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ItemCard;
