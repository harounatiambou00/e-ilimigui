import React, { useState, useEffect } from 'react';

import useStyles from './styles';

import { Divider, Grid, Button, InputLabel, FormControl, InputAdornment, FilledInput, Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Email, Phone } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

import Logo from '../../../../assets/images/Logo.png';

import SecondStep from '../SecondStep/SecondStep'


import Aos from 'aos';

const FirstStep = () => {

  useEffect(() => {
    Aos.init({duration : 1000})
  }, [])

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
  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
  const [phoneNumberAlreadyExists, setPhoneNumberAlreadyExists] = useState(false);
  const [continueButtonIsLoading, setContinueButtonIsLoading] = useState(false);

  const handleContinue = async() => {
    setContinueButtonIsLoading(true);
    if(isSellerAccount){
      let response = await fetch("https://localhost:8000/api/sellers/all", {
        method : "GET",
      })
      let content = await response.json();

      let sellers = content.data; 

      if(signUpWithEmail){
        let sellersEmails = sellers.map(seller => seller.email);
        sellersEmails.includes(values.email) ? setEmailAlreadyExists(true) : setEmailAlreadyExists(false);
      }else{
        let sellersPhoneNumbers = sellers.map(seller => seller.phoneNumber);
        sellersPhoneNumbers.includes(values.phoneNumber) ? setPhoneNumberAlreadyExists(true) : setPhoneNumberAlreadyExists(false);
      }
    }
    else{
      let response = await fetch("https://localhost:8000/api/clients/all", {
        method : "GET",
      })
      let content = await response.json();

      let clients = content.data; 

      if(signUpWithEmail){
        let clientsEmails = clients.map(client => client.email);
        clientsEmails.includes(values.email) ? setEmailAlreadyExists(true) : setEmailAlreadyExists(false);
      }else{
        let clientsPhoneNumbers = clients.map(client => client.phoneNumber);
        clientsPhoneNumbers.includes(values.phoneNumber) ? setPhoneNumberAlreadyExists(true) : setPhoneNumberAlreadyExists(false);
      }
    }
    window.setTimeout(() => setContinueButtonIsLoading(false), 1000)
  }

  return (
    <div className={classes.first_step_page}>
      <div className={classes.first_step_page_container} data-aos="zoom-in">
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
          <form>
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
                  startAdornment={signUpWithEmail ? <InputAdornment position="start" sx={{ fontWeight: 'bold', pt : 0.5}}></InputAdornment> : <InputAdornment position="start" sx={{ fontWeight: 'bold', pt : 0.5, ml : 2}}>+227</InputAdornment>}
                  label="Amount"
                  inputProps={signUpWithEmail ? {pattern : "[a-zA-Z_]+@[a-zA-z]+.[a-zA-Z_]{2,}"} : {inputMode : 'numeric', pattern : "[0-9]{8,8}", maxlength : 8}}
                />
                <Alert severity="error" sx={signUpWithEmail && emailAlreadyExists ? {mt : 1, mb : 1} : {display : 'none'}}>
                  Cet adresse Email existe déja
                </Alert>
                <Alert severity="error" sx={!signUpWithEmail && phoneNumberAlreadyExists ? {mt : 1, mb : 1} : {display : 'none'}}>
                  Ce numéro existe déja.
                </Alert>
                <small className={classes.send_message_notif}>
                  Nous vous enverrons un {signUpWithEmail ? "mail" : "SMS"} pour verifier que {signUpWithEmail ? "cette adresse email" : "ce numéro de telephone"} vous appartient.
                  <strong>NB : </strong>Ce mail ou cet SMS vous couteras rien.<a href="#">Politique de confidentialité</a>.
                </small>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant='contained'
                sx={continueButtonIsLoading ? {display: 'none'} : {width: '100%', fontWeight: 'bold'}}
                onClick={handleContinue}
              >
                Continuer
              </Button>
              <LoadingButton 
                variant='contained'
                loading
                sx={!continueButtonIsLoading ? {display: 'none'} : {width: '100%', fontWeight: 'bold'}}
                onClick={handleContinue}
              >
                Continuer
              </LoadingButton>
              <small className={classes.go_to_sign_in_page}>
                Vous avez déja un compte ?&nbsp; <a href="#">Conectez-vous</a>
              </small>
            </Grid>
            <Grid item xs={12}>
              <Divider>OU</Divider>
              <Button 
                variant='outlined' 
                sx={{width: '100%', fontWeight: 'bold', mt : 2, color : "#064663"}} 
                startIcon={signUpWithEmail ? <Phone /> : <Email />}
                onClick={() => setSignUpWithEmail(!signUpWithEmail)}
                >
                {signUpWithEmail ? "Utiliser votre numéro de téléphone" : "Utiliser votre adresse email"}
              </Button>
            </Grid>
          </Grid>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FirstStep