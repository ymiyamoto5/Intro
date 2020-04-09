import React from 'react';
import './Header.css'
import Navigation from './Navigation';
import Icon from './Icon'

const Header = () => {
  return (
    <header className="page-header wrapper">
      <Icon />
      <Navigation />
    </header>
  );
}

export default Header;