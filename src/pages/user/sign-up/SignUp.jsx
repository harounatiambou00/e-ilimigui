import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';

const SignUp = () => {

  const [values, setValues] = useState({
    phoneNumber : '',
    verificationCode : '',
    email : '',
    firstName : '',
    lastName : '',
    password : '',
    showPassword : '',
    confirmPassword: '',
    showConfirmPassword : ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [isSellerAccount, setIsSellerAccount] = useState(false);
  const [firstStepIsCompleted, setFirstStepIsCompleted] = useState(true);
  const [signUpWithEmail, setSignUpWithEmail] = useState(false);


  useEffect(() => {

  }, firstStepIsCompleted)
  
  if(!firstStepIsCompleted){
    return(
      <FirstStep values={values} handleChange={handleChange} signUpWithEmail={signUpWithEmail} setSignUpWithEmail={setSignUpWithEmail} isSellerAccount={isSellerAccount} setIsSellerAccount={setIsSellerAccount} setFirstStepIsCompleted={setFirstStepIsCompleted}/>
    );
  }else{
    return <SecondStep values={values} setValues={setValues} handleChange={handleChange} signUpWithEmail={signUpWithEmail} setSignUpWithEmail={setSignUpWithEmail} isSellerAccount={isSellerAccount} setIsSellerAccount={setIsSellerAccount} setFirstStepIsCompleted={setFirstStepIsCompleted}/>
  }
}

export default SignUp