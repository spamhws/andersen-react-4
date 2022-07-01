import React from 'react';
import styles from './ItemCard.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../Store/Actions/cartActions';

function ItemCard({ product }) {
  const dispatch = useDispatch();
  const isLoggedInX = useSelector((state) => state.isLoggedInX);
  let buttonText = isLoggedInX ? 'Add to Cart' : 'Log in to use the cart';

  const onClick = (event) => {
    event.preventDefault();
    if (isLoggedInX) {
      dispatch(addItemToCart({ ...product, amount: Number(1) }));
    }
  };
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt='product_image' />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button className={isLoggedInX ? '' : styles.disabled} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default ItemCard;
