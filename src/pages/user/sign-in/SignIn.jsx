import React, { useState, useEffect } from 'react'

import useStyles from './styles'

import Logo from '../../../assets/images/Logo.png'
import { Divider, Grid, Button, FormControl, InputLabel, FilledInput, InputAdornment, IconButton, OutlinedInput, Checkbox, FormControlLabel, FormGroup, Alert } from '@mui/material';
import {LoadingButton} from '@mui/lab';
import CheckIcon from '@mui/icons-material/Check';
import { Email, Phone, Visibility, VisibilityOff } from '@mui/icons-material';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Aos from 'aos';

const SignIn = () => {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({duration : 1000})
  }, [])

  const [values, setValues] = useState({
    email : '',
    phoneNumber : '',
    password : '',
    showPassword : false,
  });
  const [isSellerAccount, setIsSellerAccount] = useState(false);
  const [signInWithEmail, setSignInWithEmail] = useState(true);
  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const [phoneNumberIsCorrect, setPhoneNumberIsCorrect] = useState(true);
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);
  const [remenberMe, setRemenberMe] = useState(true);
  const [continueButtonIsLoading, setContinueButtonIsLoading] = useState(false);


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({...values, showPassword : !values.showPassword});
  }

  const handleChangeRemenberMe = (event) => {
    event.preventDefault();
    setRemenberMe(!remenberMe);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setContinueButtonIsLoading(true);
    if(signInWithEmail){
      let request = {
        email : values.email,
        password : values.password,
        remenberMe : values.remenberMe
      }
      let url = isSellerAccount ? "https://localhost:8000/api/authentification/seller/login" : "https://localhost:8000/api/authentification/client/login";
      if(isSellerAccount){
          let response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(request),
            credentials: "include",
            headers: {
              "Content-Type": 'application/json',
            }
          });

          let content = await response.json();
          if(content.success === false){
            if (content.message === "Seller not found"){
              setEmailIsCorrect(false)
            }else if(content.message === "Incorrect Password"){
              setPasswordIsCorrect(false);
              setEmailIsCorrect(true);
            }
          }else{
            setEmailIsCorrect(true);
            setPasswordIsCorrect(true);
          }

          console.log(content);
      }else{
        let response = await fetch(url, {
          method:"POST",
          body:JSON.stringify(request),
          credentials: "include",
          headers: {
            "Content-Type": 'application/json',
          }
        });

        let content = await response.json();
        if(content.success === false){
          if (content.message === "Client not found"){
            setEmailIsCorrect(false)
          }else if(content.message === "Incorrect Password"){
            setPasswordIsCorrect(false);
            setEmailIsCorrect(true);
          }
        }else{
          setEmailIsCorrect(true);
          setPasswordIsCorrect(true);
        }

        console.log(content);
      }
    }else{
      let request = {
        phoneNumber : values.phoneNumber,
        password : values.password,
        remenberMe : values.remenberMe
      }
      let url = isSellerAccount ? "https://localhost:8000/api/authentification/seller/login-with-phone-number" : "https://localhost:8000/api/authentification/client/login-with-phone-number";
      if(isSellerAccount){
          let response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(request),
            credentials: "include",
            headers: {
              "Content-Type": 'application/json',
            }
          });

          let content = await response.json();
          if(content.success === false){
              if (content.message === "Seller not found"){
                setPhoneNumberIsCorrect(false)
              }else if(content.message === "Incorrect Password"){
                setPasswordIsCorrect(false);
                setPhoneNumberIsCorrect(true);
              }
          }else{
            setPhoneNumberIsCorrect(true);
            setPasswordIsCorrect(true);
          }

          console.log(content);
      }else{
        let response = await fetch(url, {
          method:"POST",
          body:JSON.stringify(request),
          credentials: "include",
          headers: {
            "Content-Type": 'application/json',
          }
        });

        let content = await response.json();
        if(content.success === false){
          if (content.message === "Client not found"){
            setPhoneNumberIsCorrect(false)
          }else if(content.message === "Incorrect Password"){
            setPasswordIsCorrect(false);
            setPhoneNumberIsCorrect(true);
          }
        }else{
          setPhoneNumberIsCorrect(true);
          setPasswordIsCorrect(true);
        }
        console.log(content);
      }
    }

    window.setTimeout(() => {setContinueButtonIsLoading(false)}, 1000);
  }

  return (
    <div className={classes.sing_in_page}>
      <div className={classes.sign_up_page_container} data-aos="zoom-in">
        <div className={classes.sign_up_page_container_header}>
          <img 
            src={Logo}
            alt='logo'
            width='50px'
          />
          <h3>Connexion</h3>
        </div>
        <Divider></Divider>
        <div className={classes.sign_up_page_container_body}>
          <h4 className={classes.title}>Bon retour sur E-ILIMI</h4>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h5 className={classes.user_type_choice_title}>Avec quel type de compte souhaitez-vous vous connecter ?</h5>
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
                <Grid item xs={12} sx={{my:1}}>
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel htmlFor='phone-number-or-email' sx={ {backgroundColor:'white', pl:2, pr:2, fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}>{signInWithEmail ? "Votre adresse email" : "Votre numéro de telephone"}</InputLabel>
                    <OutlinedInput 
                      color={(signInWithEmail && !emailIsCorrect) || (!signInWithEmail && !phoneNumberIsCorrect) ? 'error' : 'primary'}
                      fullWidth
                      id='phone-number-or-email'
                      sx={{fontWeight:'bold' ,fontFamily: "'Roboto Mono', monospace"}}
                      inputProps={signInWithEmail ? {pattern : "[a-zA-Z_.]+@[a-zA-z]+.[a-zA-Z_]{2,}"} : {inputMode : 'numeric', pattern : "[0-9]{8,8}", maxlength : 8}}
                      value= {signInWithEmail ? values.email : values.phoneNumber}
                      onChange = {signInWithEmail ? handleChange('email') : handleChange('phoneNumber')}
                      startAdornment={<InputAdornment position='start' sx={{fontWeight:'bold', fontFamily: "'Roboto Mono', monospace"}}>{signInWithEmail ? <IconButton><Email color={(signInWithEmail && !emailIsCorrect) || (!signInWithEmail && !phoneNumberIsCorrect) ? 'error' : 'primary'}/></IconButton> : <Typography variant='h6' sx={{fontWeight:'bold', fontFamily:"'Roboto Mono', monospace"}}>+227</Typography>}</InputAdornment>}
                    />
                  </FormControl>
                  <Alert severity='error' sx={ (signInWithEmail && !emailIsCorrect) || (!signInWithEmail && !phoneNumberIsCorrect) ? {mt:0.5} :{display:'none'}}>
                    Ce compte est introuvable.
                  </Alert>
                </Grid>
                <Grid item xs={12} >
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel htmlFor='password' sx={{backgroundColor:'white', pl:2, pr:2, fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}>Votre mot de passe</InputLabel>
                    <OutlinedInput 
                      color={passwordIsCorrect ? 'primary' : 'error'}
                      fullWidth
                      id='password'
                      type={values.showPassword ? 'text' : 'password'}
                      sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace", pl:1}}
                      value={values.password}
                      onChange={handleChange('password')}
                      startAdornment={<InputAdornment position='start'></InputAdornment>}
                      endAdornment={<InputAdornment position='end' sx={{fontWeight:'bold', fontFamily: "'Roboto Mono', monospace"}}>
                                        <IconButton>
                                          {values.showPassword ? <VisibilityOff color={passwordIsCorrect ? 'primary' : 'error'} onClick={handleClickShowPassword}/> : <Visibility color={passwordIsCorrect ? 'primary' : 'error'} onClick={handleClickShowPassword}/>}
                                        </IconButton>
                                      </InputAdornment>
                                      }
                    />
                  </FormControl>
                  <Alert severity='error' sx={ !passwordIsCorrect ? {mt:0.5} :{display:'none'}}>
                    Mot de passe incorrect.
                  </Alert>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup >
                    <FormControlLabel disableTypography sx={{fontFamily:"'Roboto Mon', monospace"}} control={<Checkbox checked={remenberMe} onChange={handleChangeRemenberMe} size='small'/>} label="Rester connecté(e)" />
                  </FormGroup>
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    variant='contained'
                    sx={continueButtonIsLoading ? {display: 'none'} : {width: '100%', fontWeight: 'bold'}}
                    type='submit'
                  >
                    Continuer
                  </Button>
                  <LoadingButton 
                    variant='contained'
                    loading
                    sx={!continueButtonIsLoading ? {display: 'none'} : {width: '100%', fontWeight: 'bold'}}
                  >
                    Continuer
                  </LoadingButton>
                  <div className={classes.link_to_sign_up_wrapper}>
                    N'avez-vous pas de compte ? 
                    &nbsp;
                    <Link className={classes.link_to_sign_up} to='/sign-up'>Créez un compte</Link>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Divider>OU</Divider>
                  <Button 
                    variant='outlined' 
                    sx={{width: '100%', fontWeight: 'bold', mt : 2, color : "#064663"}} 
                    startIcon={signInWithEmail ? <Phone />: <Email />}
                    onClick={() => setSignInWithEmail(!signInWithEmail)}
                    >
                    {signInWithEmail ? "Utiliser votre numéro de téléphone" : "Utiliser votre adresse email"}
                  </Button>
                </Grid>
            </Grid>
          </form> 
        </div>
        <div className={classes.sign_up_page_container_footer}>
          
        </div>
      </div>
    </div>
  )
}

export default SignIn