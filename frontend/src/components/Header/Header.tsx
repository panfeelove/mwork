import React from 'react';
import styles from './Header.module.scss';
import CartButton from '../CartButton/CartButton';

export const Header = () => {
  return (
    <div className={styles.root}>
      <div>
        {
          // [TODO] Here should be burger menu!!
        }
        <h1 className={styles.brandName} onClick={() => location.href = location.origin}>
          Soho
        </h1>
      </div>
      <div>
        <CartButton />
      </div>
    </div>
  );
};
