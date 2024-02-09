import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';
import { Prompt } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmailExist, setIsEmailExist] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY';

    setIsLoading(true);
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY';
      fetch(url,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then((res) => {
        setIsLoading(false);
        if(res.ok) {
          return res.json().then( (data) => {
            console.log(data);
          });
        } else {
          return res.json().then( (data) => {
            let errorMessage = 'Authentication Failed!';
            if(data && data.error && data.error.message){
              errorMessage = 'INVALID_LOGIN_CREDENTIALS';
            }
            throw new Error(errorMessage);
          });
        }
      }).catch(err => {
        alert(err);
      });

    }else{
      fetch(url,
        {
          method: 'POST',
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then( (res) => {
        if(res.ok) {
          return res.json().then( (data) => {
            console.log(data);
          });
        } else {
          return res.json().then( (data) => {
            let errorMessage = 'SignUp Failed!';
            if(data && data.error && data.error.message){
              errorMessage = 'EMAIL_EXISTS';
              setIsEmailExist(true);
              switchAuthModeHandler();
            }
            throw new Error(errorMessage);
          });
        }
      }).catch((err) =>{
        alert(err);
      });
    }
  };
  
  

  return (
    <section className={classes.auth}>
      <Prompt when={!isEmailExist} message='Email Already Exists' />
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login':'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >aa
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
