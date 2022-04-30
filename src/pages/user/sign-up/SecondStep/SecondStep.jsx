import React, {useState, useEffect} from 'react'

import useStyles from './styles'

import { Divider, IconButton, Button, FormControl, InputLabel, FilledInput, InputAdornment, Grid, Alert, Input, TextField, OutlinedInput, FormHelperText, MenuItem, Select, AlertTitle} from '@mui/material';
import { ArrowBack, Visibility, VisibilityOff, Copyright } from '@mui/icons-material';
import { DatePicker, LoadingButton } from '@mui/lab';

import Regions from './regions';
import Neighborhoods from './neighborhoods';


import Aos from 'aos';
import regions from './regions';
import neighborhoods from './neighborhoods';

const SecondStep = ({values, setValues, handleChange, signUpWithEmail, setSignUpWithEmail, isSellerAccount, setIsSellerAccount, setFirstStepIsCompleted, register, emailIsCorrect, phoneNumberIsCorrect, passwordIsCorrect, phoneNumberAlreadyExists, setPhoneNumberAlreadyExists, emailAlreadyExists, setEmailAlreadyExists, bankAccountNumberAlreadyExists, setBankAccountAlreadyExists}) => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration : 1000})
  }, [])

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };
  
  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const [continueButtonIsLoading, setContinueButtonIsLoading] = useState(false);

  const handleContinue = async(e) => {
    e.preventDefault();
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
    window.setTimeout(() => setContinueButtonIsLoading(false), 1000);
    register(e);
    console.log(emailAlreadyExists);
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
  }

  return (
    <div className={classes.second_step_page}>
      <div className={classes.second_step_page_container} data-aos="zoom-in">
        <div className={classes.second_step_page_header}>
          <Grid 
            container
            alignItems="center"
          >
            <Grid item xs={1}>
              <IconButton
                onClick={() => setFirstStepIsCompleted(false)}
              >
                <ArrowBack sx={{color : 'black'}}/>
              </IconButton>
            </Grid>
            <Grid item xs={11}>
              <h3>Finaliser l'inscription</h3>
            </Grid>
          </Grid>
        </div>
        <Divider></Divider>
        <div className={classes.second_step_page_body}>
          <form onSubmit={handleContinue}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <FormControl variant='outlined' fullWidth>
                  <InputLabel htmlFor='firstName' sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Prénom</InputLabel>
                  <OutlinedInput
                    sx={{fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', opacity:0.9}}
                    fullWidth
                    id='firstName'
                    label="Prénom"
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant='outlined' fullWidth>
                  <InputLabel htmlFor='lastName' sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Nom</InputLabel>
                  <OutlinedInput
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}
                    fullWidth
                    id='lastName'
                    label="Nom"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant='outlined'>
                  <InputLabel htmlFor="phoneNumberr" sx={{backgroundColor:'#EEEEEE', fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace", px:2}}>Numéro de téléphone</InputLabel>
                  <OutlinedInput
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace", opacity:0.9}}
                    id="phoneNumberr"
                    value={values.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}>+227</InputAdornment>}
                    inputProps={{inputMode : 'numeric', pattern : "[0-9]{8,8}", maxlength : 8}}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant='outlined' fullWidth>
                  <InputLabel htmlFor='email' sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Adresse email</InputLabel>
                  <OutlinedInput
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}
                    fullWidth
                    id='email'
                    label="Email"
                    value={values.email}
                    onChange={handleChange('email')}
                    required
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                  />
                </FormControl>
                <Alert severity='error' sx={emailAlreadyExists ? {mb : 2} : {display : 'none'}}>
                    Cet adresse email est déja utilisé.
                </Alert>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="password" sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Mot de passe</InputLabel>
                  <OutlinedInput
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}
                    fullWidth
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    required
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="confirmPassword" sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Confirmez le mot de passe</InputLabel>
                  <OutlinedInput
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}
                    fullWidth
                    type={values.showConfirmPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    required
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                          edge="end"
                        >
                          {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} sx={!isSellerAccount ? {display:'none'} : {}}>
                <FormControl variant='outlined' fullWidth>
                  <InputLabel htmlFor='birth-date' sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Date de naissance</InputLabel>
                  <OutlinedInput
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}
                    fullWidth
                    id='birth-date'
                    type='date'
                    label="Date de naissance"
                    value={values.birthDate}
                    onChange={handleChange('birthDate')}
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} sx={!isSellerAccount ? {display:'none'} : {}}>
                <FormControl fullWidth>
                <InputLabel id="region-select" sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Votre région</InputLabel>
                <Select
                  startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                  fullWidth
                  labelId="region-select"
                  value={values.region}
                  label="Votre region"
                  onChange={handleChange('region')}
                  defaultValue='Niamey'
                  sx={{fontWeight:'bold', fontFamily: "'Roboto Mono', monospace"}}
                >
                  {
                    regions.map((region) => {
                      return (
                        <MenuItem sx={{fontWeight:'bold', fontFamily: "'Roboto Mono', monospace"}} key={region.id} defaultValue='Niamey' value={region.name}>{region.name}</MenuItem>
                      );
                    })
                  }
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12} md={6} sx={!isSellerAccount ? {display:'none'} : {}}>
                <FormControl fullWidth>
                <InputLabel id="region-select" sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Votre quartier</InputLabel>
                <Select
                  fullWidth
                  labelId="neighborhood-select"
                  value={values.neighborhood}
                  label="Votre quartier"
                  onChange={handleChange('neighborhood')}
                  sx={{fontWeight:'bold', fontFamily: "'Roboto Mono', monospace"}}
                  startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                >
                  {
                    neighborhoods.map((neighborhood) => {
                      if(neighborhood.region === values.region){
                        return (
                          <MenuItem sx={{fontWeight:'bold', fontFamily: "'Roboto Mono', monospace"}} key={neighborhood.id} value={neighborhood.name}>{neighborhood.name}</MenuItem>
                        );
                      }
                    })
                  }
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={12} md={6} sx={!isSellerAccount ? {display:'none'} : {}}>
                <FormControl variant='outlined' fullWidth>
                  <InputLabel htmlFor='bank-account-number' sx={{backgroundColor:'#EEEEEE', fontFamily:"'Roboto Mono', monospace", fontWeight:'bold', px:2}}>Numéro de compte banquaire</InputLabel>
                  <OutlinedInput
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}
                    fullWidth
                    id='bank-account-number'
                    label="Numéro de compte banquaire"
                    value={values.bankAccountNumber}
                    onChange={handleChange('bankAccountNumber')}
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5,}}></InputAdornment>}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <small className={classes.policyInfo}>
                  En cliquant sur <strong>Accepter et Continuer</strong>, vous acceptez la <a href=''>politique de confidentialité</a>, <a href=''>les termes et les condition d'utilistation</a>, ainsi que la <a href=''>politique de remboursement  </a> de E-Ilimi.
                </small>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant='contained'
                  sx={continueButtonIsLoading ? {display: 'none'} : {width: '100%', backgroundColor:'#FFD369', color:'#222831', fontWeight:'bold', border:'2px solid #222831', '&:hover' : {backgroundColor:'#FFD369'}}}
                  onClick={handleContinue}
                >
                  Accepter & Continuer
                </Button>
                <LoadingButton 
                  variant='contained'
                  loading
                  sx={!continueButtonIsLoading ? {display: 'none'} : {width: '100%', fontWeight: 'bold'}}
                  type='submit'
                > 
                  Accepter & Continuer
                </LoadingButton>
              </Grid>
              <Grid item xs={12}>
                <Divider></Divider>
              </Grid>
              <Grid item xs={12}>
                <small className={classes.footer}>
                  <Copyright /> &nbsp; 2022 Copyright TiamTech LLC
                </small>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SecondStep