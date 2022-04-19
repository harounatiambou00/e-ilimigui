import React from 'react';

import useStyles from './styles';

import { Dehaze } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import Logo from '../../../assets/images/Logo.png'


const BrandAndLeftBarIcon = ({leftbarIsOpened, openLeftBar}) => {
    const classes = useStyles();

  return (
    <div className = {classes.brandAndLeftBarIcon}>
        <IconButton
            onClick={() => openLeftBar(!leftbarIsOpened)}
        >
            <Dehaze />
        </IconButton>
        <div>
            <img 
                src={Logo}
                className={classes.brandImg}
                alt='logo'
            />
        </div>
    </div>
  )
}

export default BrandAndLeftBarIcon