import styles from './CartFullscreen.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeItem } from '../../Store/Actions/cartActions';

function CartFullscreen() {
  const isLoggedInX = useSelector((state) => state.isLoggedInX);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (!isLoggedInX) {
    return (
      <div className={styles.cartFullscreen}>
        <h1>Login to view the cart</h1>
      </div>
    );
  }

  const onRemoveClick = (id) => {
    dispatch(removeItem(id));
  };

  const onEmptyClick = () => {
    dispatch(emptyCart());
  };

  let sum = 0;

  cart.items.forEach((item, index) => {
    sum += item.amount * item.price;
  });

  return (
    <div className={styles.cartFullscreen}>
      <table>
        <thead>
          <tr>
            <th className={styles.idCol}>ID</th>
            <th className={styles.prodCol}>Product</th>
            <th className={styles.priceCol}>Price/item</th>
            <th className={styles.idCol}>Amount</th>
            <th className={styles.priceCol}>Price</th>
            <th className={styles.removeCol}></th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item, index) => {
            return (
              <tr key={index}>
                <td className={styles.idCol}>{item.id}</td>
                <td className={styles.prodCol}>{item.title}</td>
                <td className={styles.priceCol}>${item.price}</td>
                <td className={styles.idCol}>{item.amount}</td>
                <td className={styles.priceCol}>${item.amount * item.price}</td>
                <td className={styles.removeCol}>
                  <button
                    className={styles.removeBtn}
                    onClick={() => {
                      onRemoveClick(item.id);
                    }}
                  >
                    &#10060;
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.cartFooter}>
        <h3>Total: ${sum}</h3>
        <button className={styles.emptyBtn} onClick={onEmptyClick}>
          Empty cart
        </button>
        <button disabled={true} className={styles.payBtn}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartFullscreen;
