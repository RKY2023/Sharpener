import { useState, useRef, useContext, useCallback } from 'react';
import { Prompt, useHistory } from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap';
import EcommerceContext from '../../store/EcommerceContext';

const AuthForm = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(EcommerceContext);

  const [isLoading, setIsLoading] = useState(false);
  const [loginResponseOutput, setLoginResponseOutput] = useState('');

  const loginRes = (res) => {
    if(res && res.error && res.error.message){
      setLoginResponseOutput(res.error.message);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const loginData = {
      email: enteredEmail,
      password: enteredPassword,
    }
    loginFirebaseUser(loginData);
  }

  const loginFirebaseUser = useCallback( async (loginData) => {
    try{
      setIsLoading(true);
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB8_J6A_7bsjzl4Zy3OkODi-GMz9MftKyY',
        {
          method: 'POST',
          body: JSON.stringify({
            email: loginData.email,
            password: loginData.password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      const data = await response.json();
      setIsLoading(false);
      if(data.idToken){
        authCtx.login(data.idToken);
        history.replace('/product');
      } else {
        console.log(data);
        let errorMessage = 'Authentication Failed!';
        if(data && data.error && data.error.message){
          errorMessage = 'INVALID_LOGIN_CREDENTIALS';
        }
        throw new Error(errorMessage);
      }
    }catch(err) {
      loginRes(err);
    }
  },[]); 
  
  return (
    <section>
      <Container>
      <h1 className='m-3 text-center'>Login</h1>
      <div>{loginResponseOutput}</div>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' required ref={emailInputRef}/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' required ref={passwordInputRef}/>
        </Form.Group>
        {isLoading && <p>Sending request...</p>}
        <Button onClick={submitHandler}>Login</Button>
      </Form>
      </Container>
    </section>
  );
};

export default AuthForm;
