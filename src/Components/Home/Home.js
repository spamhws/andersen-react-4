import { useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import LoadingMessage from '../LoadingMessage/LoadingMessage';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import CartMin from '../CartMin/CartMin';

function Home() {
  const dataX = useSelector((state) => state.loadData);
  const [itemLimit, setItemLimit] = useState(11);
  if (dataX === null) {
    return <LoadingMessage />;
  }

  const onClick = () => {
    setItemLimit(itemLimit + 12);
  };

  return (
    <div className={styles.home}>
      <div className={styles.itemsGrid}>
        {dataX.map((product, index) => {
          if (index <= itemLimit) {
            return (
              <Link key={index} to={`/product/${product.id}`} state={product.id}>
                <ItemCard product={product} />
              </Link>
            );
          }
        })}
      </div>
      <button onClick={onClick} className={styles.loadMoreBtn}>
        Load more...
      </button>
      <CartMin />
    </div>
  );
}

export default Home;
