import React from 'react';
import styles from './CartButton.module.scss';
import { IconButton } from '../../common/components/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartStore } from 'src/store/cart';

const CartButton = () => {
  const selections = useCartStore((state) => state.cart);

  return (
    <IconButton className={styles.root}>
      <ShoppingCartIcon />
      {
        Boolean(selections.length) && (
          <span className={styles.counter}>
            {selections.length}
          </span>
        )
      }
    </IconButton>
  );
};

export default CartButton;
