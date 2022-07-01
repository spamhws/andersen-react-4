import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleIsLoggedInX } from '../../Store/Actions/toggleIsLoggedIn';
import LoginModal from '../LoginModal/LoginModal';
import styles from './Header.module.css';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedInX = useSelector((state) => state.isLoggedInX);

  const dispatch = useDispatch();

  let buttonText = isLoggedInX ? 'Log out' : 'Log in';

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function onClick() {
    // if (isLoggedInX) {
    if (isLoggedInX) {
      dispatch(toggleIsLoggedInX());
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
      <LoginModal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default Header;
