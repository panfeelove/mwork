import React from 'react';
import styles from './Header.module.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '../../common/components/IconButton';

export const Header = () => {
  return (
    <div className={styles.root}>
      <div>
        {
          // [TODO] Here should be burger menu!!
        }
        <h1 className={styles.brandName}>
          Soho
        </h1>
      </div>
      <div>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};
