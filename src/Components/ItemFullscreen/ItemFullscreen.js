import React from 'react';
import styles from './ItemFullscreen.module.css';
import LoadingMessage from '../LoadingMessage/LoadingMessage';
import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart } from '../../Store/Actions/cartActions';
import CartMin from '../CartMin/CartMin';

function ItemFullscreen() {
  const isLoggedInX = useSelector((state) => state.isLoggedInX);
  const dataX = useSelector((state) => state.loadData);
  const location = useLocation();
  const ID = location.state;
  const [fieldValue, setFieldValue] = useState(1);
  const dispatch = useDispatch();

  if (dataX === null) {
    return <LoadingMessage />;
  } else {
    const buttonText = isLoggedInX ? 'Add to Cart' : 'Log in to use the cart';
    const product = dataX.filter((product) => product.id === ID)[0];

    const handleChange = (event) => {
      setFieldValue(event.target.value);
    };

    const onClick = (event) => {
      event.preventDefault();
      if (isLoggedInX) {
        dispatch(addItemToCart({ ...product, amount: Number(fieldValue) }));
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
            <input type='number' defaultValue='1' onChange={handleChange} />
            <button className={isLoggedInX ? '' : styles.disabled} onClick={onClick}>
              {buttonText}
            </button>
          </div>
        </div>
        <CartMin />
      </div>
    );
  }
}

export default ItemFullscreen;
