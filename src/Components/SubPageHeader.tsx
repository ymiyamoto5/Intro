import React from 'react';
import './Header.css'
import Navigation from './Navigation';
import Icon from './Icon'
import './SubPageHeader.css'

const SubPageHeader = props => {
  return (
    <div id="sub-header">
      <header className="page-header wrapper">
        <Icon />
        <Navigation />
      </header>
    </div>
  );
}

export default SubPageHeader;