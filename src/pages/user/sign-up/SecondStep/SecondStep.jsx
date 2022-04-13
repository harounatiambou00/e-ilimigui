import React, {useState} from 'react'

import useStyles from './styles'

import { Divider, IconButton, Button, FormControl, InputLabel, FilledInput, InputAdornment, Grid, Alert, Input, TextField} from '@mui/material';
import { ArrowBack, Visibility, VisibilityOff, Copyright } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';


const SecondStep = ({values, setValues, handleChange, signUpWithEmail, setSignUpWithEmail, isSellerAccount, setIsSellerAccount, setFirstStepIsCompleted}) => {
  const classes = useStyles();

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
    <div className={classes.second_step_page}>
      <div className={classes.second_step_page_container}>
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
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant='standard'
                  label="Prénom"
                  value={values.firstName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant='standard'
                  label="Nom"
                  value={values.lastName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant='standard'>
                  <InputLabel htmlFor="standard-adornment-for-phone-number" sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace", mb : 2}}>Numéro de téléphone</InputLabel>
                  <Input
                    sx={{ fontWeight: 'bold', fontFamily: "'Roboto Mono', monospace"}}
                    id="standard-adornment-for-phone-number"
                    value={values.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    startAdornment={<InputAdornment position="start" sx={{pt : 0.5}}>+227</InputAdornment>}
                    label="Amount"
                    inputProps={{inputMode : 'numeric', pattern : "[0-9]{8,8}", maxlength : 8}}
                  />
                </FormControl>
                <Alert severity="error" sx={phoneNumberAlreadyExists ? {mt : 1, mb : 1} : {display : 'none'}}>
                  Ce numéro existe déja.
                </Alert>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant='standard'
                  label="Email"
                />
                <Alert severity="error" sx={emailAlreadyExists ? {mt : 1, mb : 1} : {display : 'none'}}>
                  Cet adresse Email existe déja
                </Alert>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    fullWidth
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
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
                <FormControl fullWidth variant="standard">
                  <InputLabel htmlFor="filled-adornment-password">Confirmer le mot de passe</InputLabel>
                  <Input
                    fullWidth
                    id="filled-adornment-password"
                    type={values.showConfirmPassword ? 'text' : 'password'}
                    value={values.confirmPassword}
                    onChange={handleChange('confirmPassword')}
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
                {values.password !== values.confirmPassword && 
                  <Alert severity='error' size='small'>
                    <small>
                      Les deux mots de passes de sont pas les m&ecirc;me.
                    </small> 
                  </Alert>
                }
              </Grid>
              <Grid item xs={12}>
                <small className={classes.policyText}>
                  En cliquant sur Accepter et continuer, 
                  j'accepte les <a href='#'>Conditions générales</a>, 
                  les <a href="#">Conditions de service</a> relatives aux paiements, 
                  et je reconnais avoir pris connaissance de la <a href="#">Politique de confidentialité</a> de E-Ilimi.
                </small>
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