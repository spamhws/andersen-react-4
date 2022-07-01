import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './CartMin.module.css';

function CartMin() {
  const isLoggedInX = useSelector((state) => state.isLoggedInX);
  const cart = useSelector((state) => state.cart);
  if (!isLoggedInX) return null;

  let amount = 0,
    sum = 0;

  cart.items.forEach((item, index) => {
    amount += item.amount;
    sum += item.amount * item.price;
  });

  return (
    <Link to={`/cart`} className={styles.cartMin}>
      <p>
        {amount} items in the cart. Total: ${sum}
      </p>
    </Link>
  );
}

export default CartMin;
