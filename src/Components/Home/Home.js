import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home({ data, addItemToCart, isLoggedIn }) {
  if (data === null) {
    return (
      <div className={styles.itemsGrid}>
        <h1>Loading Products...</h1>
      </div>
    );
  }
  return (
    <div className={styles.itemsGrid}>
      {data.map((e, i) => (
        <Link key={i} to={`/product/${e.id}`} state={e}>
          <ItemCard product={e} addItemToCart={addItemToCart} isLoggedIn={isLoggedIn} />
        </Link>
      ))}
    </div>
  );
}

export default Home;
