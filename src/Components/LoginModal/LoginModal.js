import React, { useState } from 'react';
import styles from './LoginModal.module.css';
import ReactDOM from 'react-dom';
import { useRef } from 'react';

function LoginModal({ users, toggleIsLoggedIn, toggleModal, isOpen }) {
  const emailInput = useRef('');
  const pwdInput = useRef('');

  const [isEmailErrShown, setIsEmailErrShown] = useState(false);
  const [isPwdErrShow, setIsPwdErrShow] = useState(false);

  function userValidation(email, password) {
    let emailFound = false;
    let pwdMatches = false;

    setIsEmailErrShown(false);
    setIsPwdErrShow(false);

    users.forEach((user) => {
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
      toggleIsLoggedIn();
      toggleModal();
    }
  }

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className={styles.loginOverlay}
        onClick={() => {
          toggleModal();
        }}
      ></div>
      <div className={styles.loginModal}>
        <div
          className={styles.closeBtn}
          onClick={() => {
            toggleModal();
          }}
        >
          &#10060;
        </div>
        <label htmlFor='email'>
          <h4>Email</h4>
          <input type='email' id='email' name='email' placeholder='email' ref={emailInput} />
          <p className={isEmailErrShown ? styles.emailErr : ''}>Email is not recognized</p>
        </label>

        <label htmlFor='password'>
          <h4>Password</h4>
          <input type='password' id='pwd' name='pwd' placeholder='********' ref={pwdInput} />
          <p className={isPwdErrShow ? styles.emailErr : ''}>Incorrect password</p>
        </label>

        <div>
          <button
            className={styles.cancelBtn}
            onClick={() => {
              toggleModal();
            }}
          >
            Cancel
          </button>
          <button
            className={styles.loginBtn}
            onClick={() => {
              userValidation(emailInput.current.value, pwdInput.current.value);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default LoginModal;
