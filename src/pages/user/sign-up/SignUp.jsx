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
    showConfirmPassword : '',
    birthDate : '',
    region: 'Niamey',
    neighborhood : '',
    bankAccountNumber : '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [isSellerAccount, setIsSellerAccount] = useState(false);
  const [firstStepIsCompleted, setFirstStepIsCompleted] = useState(false);
  const [signUpWithEmail, setSignUpWithEmail] = useState(false);
  const [signInWithEmail, setSignInWithEmail] = useState(true);
  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const [phoneNumberIsCorrect, setPhoneNumberIsCorrect] = useState(true);
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);
  const [phoneNumberAlreadyExists, setPhoneNumberAlreadyExists] = useState(false);
  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
  const [bankAccountNumberAlreadyExists, setBankAccountNumberAlreadyExists] = useState(false);
  
  const register = async(e) => {
    e.preventDefault();
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
    if(isSellerAccount){
      let user  = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password,
                    phoneNumber: values.phoneNumber,
                    phoneNumberCode: "227",
                    address: "Niger" + values.region + values.neighborhood,
                    bankAccountNumber: values.bankAccountNumber,
                  }

      const url = 'https://localhost:8000/api/authentification/seller/register';
      let response = await fetch(url, {
        method : "POST",
        body : JSON.stringify(user),
        credentials : 'include',
        headers : {
          "Content-Type": "application/json",
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
      let user  = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        phoneNumberCode: "227",
        address: "",
      }

      const url = 'https://localhost:8000/api/authentification/client/register';
      let response = await fetch(url, {
      method : "POST",
      body : JSON.stringify(user),
      credentials : 'include',
      headers : {
      "Content-Type": "application/json",
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
  }


  useEffect(() => {

  }, firstStepIsCompleted)
  
  if(!firstStepIsCompleted){
    return(
      <FirstStep 
        values={values} 
        handleChange={handleChange} 
        signUpWithEmail={signUpWithEmail} 
        setSignUpWithEmail={setSignUpWithEmail} 
        isSellerAccount={isSellerAccount} 
        setIsSellerAccount={setIsSellerAccount} 
        setFirstStepIsCompleted={setFirstStepIsCompleted}/>
    );
  }else{
    return (
    <SecondStep 
      values={values} 
      setValues={setValues} 
      handleChange={handleChange} 
      signUpWithEmail={signUpWithEmail} 
      setSignUpWithEmail={setSignUpWithEmail} 
      isSellerAccount={isSellerAccount} 
      setIsSellerAccount={setIsSellerAccount} 
      setFirstStepIsCompleted={setFirstStepIsCompleted} 
      register={register} 
      emailIsCorrect={emailIsCorrect} 
      phoneNumberIsCorrect={phoneNumberIsCorrect} 
      passwordIsCorrect={passwordIsCorrect} 
      phoneNumberAlreadyExists={phoneNumberAlreadyExists}
      setPhoneNumberAlreadyExists={setPhoneNumberAlreadyExists}
      emailAlreadyExists={emailAlreadyExists}
      setEmailAlreadyExists={setEmailAlreadyExists}
      bankAccountNumberAlreadyExists={bankAccountNumberAlreadyExists}
      setBankAccountNumberAlreadyExists={setBankAccountNumberAlreadyExists}
    />
    );
  }
}

export default SignUp 