import React, { PropsWithChildren } from 'react';
import styles from './IconButton.module.scss';
import cn from 'classnames';

interface IIconButtonProps {
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({ className, children, onClick }: PropsWithChildren<IIconButtonProps>) => {
  return (
    <button className={cn(styles.root, className)} onClick={onClick}>
      {children}
    </button>
  );
};
