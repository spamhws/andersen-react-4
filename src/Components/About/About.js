import React from 'react';
import CartMin from '../CartMin/CartMin';
import styles from './About.module.css';

function About() {
  return (
    <div>
      <p className={styles.about}>
        The React Shop is a place where you can buy anything from anywhere in the world and get it delivered to your
        doorstep in a few days. The idea is that you can order from any online store and have it delivered to your
        doorstep without having to deal with customs or shipping. The best part is that the product prices are in USD,
        so there are no conversion rates to worry about. The React Shop is a place where you can buy anything from
        anywhere in the world and get it delivered to your doorstep in a few days. With the React Shop, you can order
        from any online store and have it delivered to your doorstep without having to deal with customs or shipping.
        The best part is that the product prices are in USD, so there are no conversion rates to worry about.
      </p>
      <CartMin />
    </div>
  );
}

export default About;
