import React from 'react'

import useStyles from './styles';

import Logo from '../../assets/images/Logo.png';
import { FacebookRounded, LanguageTwoTone, Twitter, YouTube, Instagram } from '@mui/icons-material';
import { Button, Divider, FormControl, Grid, IconButton, InputLabel, OutlinedInput } from '@mui/material';


const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.footerHeader}>
        <Grid container sx={{alignItems : 'center', textAlign : 'center'}}>
          <Grid item xs={12} md={6}>
            <img
              src={Logo}
              className={classes.logo}
              alt='logo'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <IconButton >
              <FacebookRounded sx = {{ fontSize : 30, color : "#4267B2"}}/>
            </IconButton>
            <IconButton>
              <YouTube sx = {{ fontSize : 30, color:"#FF0000"}}/>
            </IconButton>
            <IconButton>
              <Twitter sx = {{ fontSize : 30, color:"#1DA1F2"}}/>
            </IconButton>
            <IconButton>
              <Instagram sx = {{ fontSize : 30, color:"#fb3958"}}/>
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <Divider sx={{backgroundColor:'white'}} />
      <div className={classes.footerBody}>
      <Grid container sx={{}}>
          <Grid item xs={12} md={6} lg={3} sx={{mb:2}}>
                <h4>Conditions d'utilistation</h4><br />
                <h6><a href = "#" className = {classes.footerBodyLinks} >Termes et Conditions d'utilistation</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Livraisons et Remboursements</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Politique de confidentialité</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Modes de payement</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>FAQ</a></h6><br />
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{mb:2}}>
                <h4>Notre Entreprise</h4><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Qui sommes-nous ?</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Contactez-nous</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Nos Magasins</a></h6><br />
                <IconButton>
                    <LanguageTwoTone sx = {{ fontSize : 30}}/>
                </IconButton>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{mb:2}}>
                <h4>Conditions d'utilistation</h4><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Termes et Conditions d'utilistation</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Livraisons et Remboursements</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Politique de confidentialité</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>Modes de payement</a></h6><br />
                <h6><a href = "#" className = {classes.footerBodyLinks}>FAQ</a></h6><br />
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{mb:2}}>
                <h4>Se connecter</h4><br />
                <form className={classes.signInForm}>
                  <div className={classes.signInFormControl}>
                    <label for='phone-number' className={classes.signInInputLabel}>Numéro de téléphone</label>
                    <input 
                      type='tel'
                      minLength={8}
                      maxLength={8}
                      className={classes.signInInputs}
                    />
                  </div>
                  <div className={classes.signInFormControl}>
                    <label for='password' className={classes.signInInputLabel}>Mot de passe</label>
                    <input 
                      type='password'
                      className={classes.signInInputs}
                    />
                  </div>

                  <Button 
                    variant='contained' 
                    sx={{backgroundColor:'#FFD369', color:'#222831', fontWeight:'bold', border:'2px solid #222831', '&:hover' : {backgroundColor:'#FFD369'}}}
                  >
                    Connection
                  </Button>
                </form>
          </Grid>
          <Grid item xs={12}>
            <br /><h4>Nos Partenaires</h4><br />
                <h6>
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>, &nbsp;&nbsp;
                    <a href = "#" className = {classes.footerBodyLinks}>Airtel Niger</a>&nbsp;&nbsp;
                    
                </h6>
          </Grid>
        </Grid>
      </div>
      <Divider  sx={{my : 4}}></Divider>
      <div className={classes.footerFooter}>
        <small>
          Copyright &copy; 2022 | All rights reserved
        </small>
        <br />
        <small>
          Developped by <a href="#">TIAMTECH LLC</a>
        </small>
      </div>
    </footer>
  )
}

export default Footer