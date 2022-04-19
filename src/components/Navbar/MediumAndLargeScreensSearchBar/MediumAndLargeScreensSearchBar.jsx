import { LoopOutlined, Search } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

import useStyles from './styles';

const MediumAndLargeScreensSearchBar = () => {
    const classes = useStyles();
  return (
    <div className={classes.mediumAndLargeScreensSearchBar}>
        <select className={classes.categorySelect}>
            <option value=''>Catégories</option>
        </select>
        <input 
            type='text'
            className={classes.searchInput}
        />
        <div className={classes.searchIconButton}>
            <IconButton>
                <Search sx={{color:'#222831'}}/>
            </IconButton>
        </div>
    </div>
  )
}

export default MediumAndLargeScreensSearchBar