import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import FirstStep from './FirstStep/FirstStep';
import SecondStep from './SecondStep/SecondStep';

const SignUp = () => {

  const [values, setValues] = useState({
    phoneNumber : '',
    verificationCode : '',
    email : '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [isSellerAccount, setIsSellerAccount] = useState(false);

  const [firstStepIsCompleted, setFirstStepIsCompleted] = useState(true);


  useEffect(() => {

  }, firstStepIsCompleted)
  
  if(!firstStepIsCompleted){
    return(
      <FirstStep values={values} handleChange={handleChange} isSellerAccount={isSellerAccount} setIsSellerAccount={setIsSellerAccount} setFirstStepIsCompleted={setFirstStepIsCompleted}/>
    );
  }else{
    return <SecondStep />
  }
}

export default SignUp