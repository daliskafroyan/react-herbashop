import React from 'react';
import { ReactComponent as Logo } from '../../assets/natural.svg';

import './header.style.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/shop">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
