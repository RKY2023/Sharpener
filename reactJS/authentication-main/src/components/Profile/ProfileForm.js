import { useCallback, useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/AuthContext';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {  
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    changePasswordFirebaseUser(enteredNewPassword);
  }

  let url = '';

  const changePasswordFirebaseUser = useCallback( async (enteredNewPassword) =>{
    try{
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          isToken: authCtx.token,
          password: enteredNewPassword, 
          returnSecureToken: false
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      history.replace('/');
    }catch(err){
      console.log(err);
    }
  },[])

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
