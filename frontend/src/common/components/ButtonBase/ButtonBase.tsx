import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './ButtonBase.module.scss';

interface IButtonBaseProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonBase = ({ children, className, onClick }: PropsWithChildren<IButtonBaseProps>) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.root, className)}
    >
      {children}
    </button>
  );
};
