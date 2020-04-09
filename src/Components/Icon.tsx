import React from 'react';
import IconImg from '../images/my-icon.jpg'
import './Icon.css'

const Icon = () => {
  return (
    <img className="my-icon" src={IconImg} alt="アイコン" />
  )
};

export default Icon;