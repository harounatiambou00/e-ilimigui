import { Mail, MailOutlineRounded, NotificationImportant, Notifications, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { Avatar, Badge, IconButton } from '@mui/material';
import React from 'react'

import useStyles from './styles';

import TestProfile from '../../../assets/images/TestProfile.jpg';

const NavIcons = () => {
    const classes = useStyles();
  return (
    <div className={classes.navIcons}>
        <IconButton sx={{mx : 0.5}}>
            <Badge badgeContent={2} color='error'>
                <ShoppingCartOutlined />
            </Badge>
        </IconButton>
        <IconButton sx={{mx : 0.5}}>
            <Badge variant='dot' color='error'>
                <MailOutlineRounded />
            </Badge>
        </IconButton>
        <IconButton sx={{mx : 0.5}}>
            <Avatar
                alt='User Profile'
                src={TestProfile}
                size='medium'
            />
        </IconButton>

    </div>
  )
}

export default NavIcons