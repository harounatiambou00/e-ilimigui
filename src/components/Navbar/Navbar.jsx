import React from 'react'
import BrandAndLeftBarIcon from './BrandAndLeftBarIcon/BrandAndLeftBarIcon';
import MediumAndLargeScreensSearchBar from './MediumAndLargeScreensSearchBar/MediumAndLargeScreensSearchBar';
import NavIcons from './NavIcons/NavIcons';

import useStyles from './styles'

const Navbar = () => {
    const classes = useStyles();
  return (
    <div className={classes.navbar}>
        <div className={classes.container}>
            <BrandAndLeftBarIcon />
            <MediumAndLargeScreensSearchBar />
            <NavIcons />
        </div>
    </div>
  )
}

export default Navbar