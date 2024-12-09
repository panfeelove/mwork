import React, { useEffect, useMemo, useState } from 'react';
import styles from './AssortmentCard.module.scss';
import { formatter } from '../../../common/utils/formatter';
import { ButtonBase } from '@mui/material';
import cn from 'classnames';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductDataType } from '@/common/types';
import { useCartStore } from '@/store/cart';
import { AssortmentCartSkeleton } from '../AssortmentCartSkeleton';

interface IAssortmentCardProps {
  item: ProductDataType;
}

export const AssortmentCard = ({ item }: IAssortmentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const handleAddToCart = () => {
    if (isInCart) return;
    addToCart(item);
  };
  const isInCart = useMemo(() => {
    return !!cart.find(el => el.id === item.id);
  }, [cart]);

  useEffect(() => {
    const img = new Image();
    img.src = item.imageUrl;
    img.onload = () => setIsLoading(false);
  }, []);

  return (
    <div 
      className={styles.root} 
      onMouseOver={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.overlayContainer}>
        {
          isLoading ? <AssortmentCartSkeleton /> : <img className={styles.image} src={item.imageUrl} alt={item.name} />
        }
        <div className={cn(styles.overlay, { [styles.hovered]: isHovered })}>
          <ButtonBase className={styles.addToCart} onClick={handleAddToCart}>
            {
              isInCart ? 'Added!' : 'Add to cart'
            }
          </ButtonBase>
        </div>
        {
          isInCart && (
            <span className={styles.indicator}>
              <ShoppingCartIcon />
            </span>
          )
        }
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.name}>{item.name}</p>
          <span className={styles.price}>{formatter.format(item.price)}</span>
        </div>
      </div>
    </div>
  );
};
