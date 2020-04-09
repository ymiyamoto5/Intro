import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className="main-nav">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/intro'>Intro</Link></li>
        <li><Link to='/photo'>Photo</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;
