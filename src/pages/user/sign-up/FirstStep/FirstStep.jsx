import React, { useState } from 'react';

import useStyles from './styles';

import { Divider, Grid, Button, InputLabel, OutlinedInput, FormControl, InputAdornment, FilledInput } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Email } from '@mui/icons-material';

import Logo from '../../../../assets/images/Logo.png'

const FirstStep = () => {

  const classes = useStyles();

  const [values, setValues] = useState({
    phoneNumber : '',
    verificationCode : '',
    email : '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [isSellerAccount, setIsSellerAccount] = useState(false);
  const [signUpWithEmail, setSignUpWithEmail] = useState(false);

  return (
    <div className={classes.first_step_page}>
      <div className={classes.first_step_page_container}>
        <div className={classes.first_step_page_header}>
          <img 
            src={Logo}
            alt='logo'
            width='50px'
          />
          <h3>Inscription</h3>
        </div>
        <Divider></Divider>
        <div className={classes.first_step_page_body}>
          <h4 className={classes.title}>Bienvenue sur E-ILIMI</h4>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h5 className={classes.user_type_choice_title}>Quel type de compte voulez-vous créer ?</h5>
            </Grid>
            <Grid item xs={6} sx={{textAlign: 'right'}}>
              <Button 
                variant={isSellerAccount ? 'outlined' : 'contained'} 
                startIcon={isSellerAccount ? '' : <CheckIcon />}
                onClick={() => setIsSellerAccount(false)}
                sx={{fontWeight : 'bold', fontFamily: "'Roboto Mono', monospace"}}
              >
                Acheteur
              </Button>
            </Grid>
            <Grid item xs={6} sx={{textAlign: 'left'}}>
              <Button 
                variant={isSellerAccount? 'contained' : 'outlined'} 
                startIcon={isSellerAccount ? <CheckIcon /> : ''}
                onClick={() => setIsSellerAccount(true)}
                sx={{fontWeight : 'bold', fontFamily: "'Roboto Mono', monospace"}}
              >
                Vendeur
              </Button>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }} variant='filled'>
                <InputLabel htmlFor="outlined-adornment-for-phone-number-or-email" sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace", ml : 2}}>{signUpWithEmail ? "Adresse email" : "Numéro de téléphone"}</InputLabel>
                <FilledInput
                  sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace",}}
                  id="outlined-adornment-for-phone-number-or-email"
                  value={signUpWithEmail ? values.email : values.phoneNumber}
                  onChange={signUpWithEmail ? handleChange('email') : handleChange('phoneNumber')}
                  startAdornment={signUpWithEmail ? '' : <InputAdornment position="start" sx={{ fontWeight: 'bold', pt : 0.5, ml : 2}}>+227</InputAdornment>}
                  label="Amount"
                />
                <small className={classes.send_message_notif}>
                  Nous vous enverrons un {signUpWithEmail ? "mail" : "SMS"} pour verifier que {signUpWithEmail ? "cette adresse email" : "ce numéro de telephone"} vous appartient.
                  <strong>NB : </strong>Ce mail ou ce message vous couteras rien.<a href="#">Politique de confidentialité</a>.
                </small>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' sx={{width: '100%', fontWeight: 'bold'}}>
                Continuer
              </Button>
              <small className={classes.go_to_sign_in_page}>
                Vous avez déja un compte ?&nbsp; <a href="#">Conectez-vous</a>
              </small>
            </Grid>
            <Grid item xs={12}>
              <Divider>OU</Divider>
              <Button 
                variant='outlined' 
                sx={{width: '100%', fontWeight: 'bold', mt : 2, color : "#064663"}} 
                startIcon={<Email />}
                onClick={() => setSignUpWithEmail(!signUpWithEmail)}
                >
                Utiliser votre adresse Email
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default FirstStep