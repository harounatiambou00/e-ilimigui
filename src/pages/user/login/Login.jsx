import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import Aos from 'aos'

import useStyles from './styles';

import { Paper, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, TextField, Checkbox, Button, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Logo from '../../../assets/images/Logo.png'

const Login = () => {
  const classes = useStyles();

  const [userType, setUserType] = useState('client')
  useEffect(() => {

  }, userType)

  const [values, setValues] = useState({
    email : '',
    password : '',
    showPassword : false,
    RemenberMe : true,
  })

  useEffect(() => {
    Aos.init({duration : 2000})
  }, [])

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

  const handleClickRemenberMe = () => {
    setValues({
      ...values,
      RemenberMe: !values.RemenberMe,
    });
  };

  const logIn = async (e) => {
    e.preventDefault();

    let url = userType === "seller" ? "https://localhost:8000/api/authentification/seller/login" : "https://localhost:8000/api/authentification/client/login";
    let user = {
      email : values.email,
      password : values.password,
      remenberMe : values.RemenberMe
    }

    let response = await fetch(url ,{
        method:"POST",
        body:JSON.stringify(user),
        credentials: "include",
        headers: {
          "Content-Type": 'application/json',
        }
      })

      const content = await response.json();

      console.log(content)
  }

  return (
    <div className = { classes.login} >
        <div className = {classes.container} data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
          <form className = {classes.form} onSubmit={logIn}>
            <Grid container spacing = {2}>
              <Grid item xs = {12}>
                <img 
                  className = {classes.logo}
                  src = {Logo}
                  alt = "Logo"
                />
              </Grid>
              <Grid item xs = {12}>
                <h2 className = {classes.title}>Connexion</h2>
              </Grid>
              <Grid item xs = {12} className = {classes.userTypeButtons}>
                  <Button variant={userType === "client" ? 'contained' : 'outlined'} onClick={() => {setUserType("client")}} className={classes.userTypeButton}>ACHETEUR</Button>
                  <Button variant={userType === "seller" ? 'contained' : 'outlined'} onClick={() => {setUserType("seller")}} className={classes.userTypeButton}>VENDEUR</Button>
              </Grid>
              <Grid item xs = {12}>
                <TextField 
                  fullWidth 
                  label="E-mail *" 
                  variant="outlined" 
                  value={values.email}
                  onChange = {handleChange('email')}
                  margin="normal"
                  InputProps={{ style: { fontSize: 15 } }}
                  InputLabelProps={{ style: { fontSize: 15 } }}
                />  
              </Grid>
              <Grid item xs = {12}>
                  <FormControl variant="outlined" fullWidth>
                      <InputLabel htmlFor="password">Mot de passe *</InputLabel>
                      <OutlinedInput
                          id="password"
                          type={values.showPassword ? 'text' : 'password'}
                          value={values.password}
                          onChange={handleChange('password')}
                          label="Mot de passe"
                          margin="normal"
                          InputProps={{ style: { fontSize: 15 } }}
                          InputLabelProps={{ style: { fontSize: 15 } }}
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
              <Grid item xs  = {12} className  = {classes.leftText}>
                <small>
                    <a href = "#">Mot de passe oublié ?</a>
                </small>
              </Grid>
              <Grid item xs  = {12} className  = {classes.leftText}>
                  <Checkbox color  = "primary" value = {values.RemenberMe} onClick = {handleClickRemenberMe} {...values.RemenberMe? 'checked' : ''}/>
                  <small>
                      Rester Connecté(e)
                  </small>
              </Grid>
              <Grid item xs = {12} md = {6} >
                    <Button variant = "contained" type="submit">
                        Se connecter
                    </Button>
                </Grid>
                <Grid item xs = {12} md = {6} className  = {classes.centerText}>
                    <small>
                        Vous avez pas encore un compte?<br/> <Link to="/register">Créez-en un</Link>
                    </small>
                </Grid>
                <Grid item xs = {12} className  = {classes.centerText}>
                    <small>
                        Copyright <a href = "#">E-Ilimi-2022</a> | All rights reserved.
                    </small>
                </Grid>
            </Grid>
          </form>
        </div>
    </div>
  )
}

export default Login