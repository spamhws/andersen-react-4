import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal';
import styles from './Header.module.css';

function Header({ isLoggedIn, toggleIsLoggedIn, users }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  let buttonText = isLoggedIn ? 'Log out' : 'Log in';

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function onClick() {
    if (isLoggedIn) {
      toggleIsLoggedIn();
    } else {
      toggleModal();
    }
  }

  return (
    <div className={styles.header}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About Us</Link>
      <button
        onClick={() => {
          onClick();
        }}
      >
        {buttonText}
      </button>
      <LoginModal isOpen={isModalOpen} toggleModal={toggleModal} toggleIsLoggedIn={toggleIsLoggedIn} users={users} />
    </div>
  );
}

export default Header;
