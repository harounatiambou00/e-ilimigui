import React, { useEffect, useState } from 'react'

import Aos from 'aos'
import "aos/dist/aos.css";

import { Paper, Grid, TextField, InputAdornment, OutlinedInput, FormControl, InputLabel, IconButton, FormGroup, Checkbox, FormControlLabel, Button, Tabs, Tab, Box, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import useStyles from './styles'

import img from '../../../assets/images/registration/userRegistrationImg.jpg'
import Logo from '../../../assets/images/Logo.png'

const Register = () => {
  useEffect(() => {
    Aos.init({duration : 750})
  }, [])

  
  const [userType, setUserType] = useState('client')
  useEffect(() => {

  }, userType)


  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    password: '',
    showPassword: false,
    confirmPassword : '',
    showConfirmPassword : false,
    email: '',
    phoneNumber : '',
    address : '',
    bankAccountNumber : '',
    });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

 const signIn = async (e) => {
    e.preventDefault();
    if(userType === "client"){
      let client = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        phoneNumberCode: "227",
      } 
      let response = await fetch("https://localhost:8000/api/authentification/client/register",{
        method:"POST",
        body:JSON.stringify(client),
        headers: {
          "Content-Type": 'application/json',
        }
      })

      const content = await response.json()

      console.log(content)
    }
    else if(userType === "seller"){
      let seller = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        phoneNumberCode: "227",
        address: values.address,
        bankAccountNumber: values.bankAccountNumber,
      } 
      let response = await fetch("https://localhost:8000/api/authentification/seller/register",{
        method:"POST",
        body:JSON.stringify(seller),
        headers: {
          "Content-Type": 'application/json',
        }
      })

      const content = await response.json()

      console.log(content)
    }
  }

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img 
        className= {classes.img}
        src = {img}
        data-aos="fade-right"
        alt = "img"
      />

      <form data-aos="fade-left" className={classes.form} onSubmit={signIn} >
        <img 
          src = {Logo}
          className = {classes.logo}
          alt = "Logo"
        />
        <div className = {classes.registrationHeader}>
          <h2  className={classes.title}>INSCRIPTION</h2>
          <div className={classes.userTypeButtons}>
            <Button variant={userType === "client" ? 'contained' : 'outlined'} onClick={() => {setUserType("client")}} className={classes.userTypeButton}>ACHETEUR</Button>
            <Button variant={userType === "seller" ? 'contained' : 'outlined'} onClick={() => {setUserType("seller")}} className={classes.userTypeButton}>VENDEUR</Button>
          </div>
        </div>
        <Grid container spacing = {2}>
              <Grid item xs = {12} sm = {6}>
                <TextField 
                  fullWidth 
                  label="Nom"
                  variant="outlined"
                  value={values.firstName}
                  onChange = {handleChange('firstName')}
                /> 
              </Grid>
              <Grid item xs = {12} sm = {6}>
                <TextField 
                  fullWidth 
                  label="Prénom"
                  variant="outlined"
                  value={values.lastName}
                  onChange = {handleChange('lastName')}
                /> 
              </Grid>
              <Grid item xs = {12} sm = {6}>
                <TextField 
                  fullWidth 
                  label="Adresse email *"
                  variant="outlined"
                  value={values.email}
                  onChange = {handleChange('email')}
                /> 
              </Grid>
              <Grid item xs = {12} sm = {6}>
                <TextField 
                    fullWidth 
                    label="Numéro de telephone"
                    variant="outlined"
                    value={values.phoneNumber}
                    onChange = {handleChange('phoneNumber')}
                  />
              </Grid>
              <Grid item xs = {12} sm = {6}>
                  <FormControl variant="outlined" fullWidth>
                      <InputLabel htmlFor="password">Password *</InputLabel>
                      <OutlinedInput
                          id="password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
                          onChange={handleChange('password')}
                          label="Password"
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
              <Grid item xs = {12} sm = {6}>
                  <FormControl  variant="outlined" fullWidth>
                      <InputLabel htmlFor="confirm-password">Confirmation *</InputLabel>
                      <OutlinedInput
                          id="confirm-password"
                          type={values.showConfirmPassword ? 'text' : 'password'}
                          value={values.confirmPassword} 
                          onChange={handleChange('confirmPassword')}
                          label="Comfir Password"
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
              <Grid item xs = {12} sm = {6} sx={{ display: userType === "seller" ? 'block' : 'none' }}> 
                <TextField 
                  fullWidth 
                  label="Adresse"
                  variant="outlined"
                  value={values.address}
                  onChange = {handleChange('address')}
                /> 
              </Grid>
              <Grid item xs = {12} sm = {6} sx={{ display: userType === "seller" ? 'block' : 'none' }}>
                <TextField 
                  fullWidth 
                  label="Compte Bancaire *"
                  variant="outlined"
                  value={values.bankAccountNumber}
                  onChange = {handleChange('bankAccountNumber')}
                /> 
              </Grid>
              <Grid item xs = {12} >
                  <Checkbox color  = "primary"/>
                  <small>
                      La création de ce compte implique que vous acceptez les <a href = "#">conditions générales de vente </a> de notre entreprise.
                      Cliquez sur la case à cocher !
                  </small>
              </Grid>
        </Grid>
        <div className  = {classes.registrationFooter}>
              <Grid container spacing = {2} alignItems = "center">
                <Grid item xs = {12} md = {6} >
                    <Button variant = "contained" type="submit">
                        S'inscrire
                    </Button>
                </Grid>
                <Grid item xs = {12} md = {6} className  = {classes.centerText}>
                    <small>
                        Avez-vous déja un compte? <a href = "#">Connectez-vous</a>
                    </small>
                </Grid>
                <Grid item xs = {12} className  = {classes.centerText}>
                    <small>
                        Copyright <a href = "#">E-ILIMI-2022</a> | All rights reserved.
                    </small>
                </Grid>
              </Grid>
            </div>
      </form>
    </div>
  )
}

export default Register