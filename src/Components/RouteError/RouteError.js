import React from 'react';
import styles from './RouteError.module.css';

function RouteError() {
  return (
    <div className={styles.error404}>
      <p>
        Oops, your (un)lucky number is... <br /> <span>404</span> <br /> You've tried to access the page that doesn't
        exist
      </p>
    </div>
  );
}

export default RouteError;
