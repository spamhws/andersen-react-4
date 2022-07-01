import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsLoggedInX } from '../../Store/Actions/toggleIsLoggedIn';

function LoginModal({ toggleModal, isOpen }) {
  const usersX = useSelector((state) => state.loadUsers);
  const dispatch = useDispatch();

  const [isEmailErrShown, setIsEmailErrShown] = useState(false);
  const [isPwdErrShow, setIsPwdErrShow] = useState(false);

  const [emailFieldValue, setEmailFieldValue] = useState('');
  const [PwdFieldValue, setPwdFieldValue] = useState('');

  const handleEmailChange = (event) => {
    setEmailFieldValue(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwdFieldValue(event.target.value);
  };

  const loginOnClick = () => {
    userValidation(emailFieldValue, PwdFieldValue);
  };

  function modalEnterPress(event) {
    if (event.key === 'Enter') {
      userValidation(emailFieldValue, PwdFieldValue);
    }
  }

  function userValidation(email, password) {
    let emailFound = false;
    let pwdMatches = false;

    setIsEmailErrShown(false);
    setIsPwdErrShow(false);

    usersX.forEach((user) => {
      if (user.email === email.toLowerCase()) {
        emailFound = true;
        if (user.password === password) {
          pwdMatches = true;
        }
      }
    });

    if (!emailFound) {
      setIsEmailErrShown(true);
      setIsPwdErrShow(false);
    } else if (!pwdMatches) {
      setIsEmailErrShown(false);
      setIsPwdErrShow(true);
    } else {
      dispatch(toggleIsLoggedInX());
      toggleModal();
    }
  }

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div onKeyDown={modalEnterPress} tabIndex='0'>
      <div className={styles.loginOverlay} onClick={toggleModal}></div>
      <div className={styles.loginModal}>
        <div className={styles.closeBtn} onClick={toggleModal}>
          &#10060;
        </div>
        <label htmlFor='email'>
          <h4>Email</h4>
          <input type='email' id='email' name='email' placeholder='email' onChange={handleEmailChange} />
          <p className={isEmailErrShown ? styles.emailErr : ''}>Email is not recognized</p>
        </label>

        <label htmlFor='password'>
          <h4>Password</h4>
          <input type='password' id='pwd' name='pwd' placeholder='********' onChange={handlePwdChange} />
          <p className={isPwdErrShow ? styles.emailErr : ''}>Incorrect password</p>
        </label>

        <div>
          <button className={styles.cancelBtn} onClick={toggleModal}>
            Cancel
          </button>
          <button className={styles.loginBtn} onClick={loginOnClick}>
            Login
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
}

export default LoginModal;
