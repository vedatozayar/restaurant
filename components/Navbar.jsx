import Image from 'next/image';
import React, { Fragment } from 'react';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src='/img/telephone.png' alt='' width='32' height='32' />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>012 345 67 89</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>HomePage</li>
            <li className={styles.listItem}>Products</li>
            <li className={styles.listItem}>Menu</li>
            <Image src='/img/logo.png' alt='' width='160px' height='75px' />
            <li className={styles.listItem}>Events</li>
            <li className={styles.listItem}>Blog</li>
            <li className={styles.listItem}>Content</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src='/img/cart.png' alt='' width='30px' height='30px' />
            <div className={styles.counter}>2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
