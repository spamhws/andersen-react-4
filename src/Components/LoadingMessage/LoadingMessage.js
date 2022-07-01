import styles from './LoadingMessage.module.css';

function LoadingMessage() {
  return (
    <div className={styles.centeredMessage}>
      <h1>Loading...</h1>
    </div>
  );
}

export default LoadingMessage;
