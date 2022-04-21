import { Avatar, Box, Drawer, IconButton, Typography } from '@mui/material';
import React from 'react'

import useStyles from './styles';

import Logo from '../../assets/images/Logo.png';
import { ClearRounded } from '@mui/icons-material';

const LeftBar = ({leftbarIsOpened, openLeftBar}) => {
    const classes = useStyles();

  return (
    <Box>
        <Drawer
            anchor="left"
            open={leftbarIsOpened}
            onClose={() => openLeftBar(!leftbarIsOpened)}
            className={classes.leftBar}
            
        >
            <div className={classes.drawerContent}>
                <div className={classes.leftBarHeader}>
                    <img
                        alt='logo'
                        src={Logo}
                        width='65px'
                    />
                    <IconButton>
                        <ClearRounded onClick={() => openLeftBar(!leftbarIsOpened)}/>
                    </IconButton>
                </div>
            </div>
        </Drawer>
    </Box>
  )
}

export default LeftBar