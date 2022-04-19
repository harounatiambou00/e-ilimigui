import React from 'react'
import LeftBar from '../LeftBar/LeftBar';
import BrandAndLeftBarIcon from './BrandAndLeftBarIcon/BrandAndLeftBarIcon';
import MediumAndLargeScreensSearchBar from './MediumAndLargeScreensSearchBar/MediumAndLargeScreensSearchBar';
import NavIcons from './NavIcons/NavIcons';

import useStyles from './styles'

const Navbar = ({leftbarIsOpened, openLeftBar}) => {
    const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
          <BrandAndLeftBarIcon leftbarIsOpened={leftbarIsOpened} openLeftBar={openLeftBar}/>
          <MediumAndLargeScreensSearchBar />
          <NavIcons />
      </div>
    </div>
  )
}

export default Navbar