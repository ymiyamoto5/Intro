import React from 'react';
import './Travel.css';
import Travel1 from '../images/travel/travel01.jpg';
import Travel2 from '../images/travel/travel02.jpg';

const Travel = () => {
  return (
    <div className="wrapper grid">
      <img className="travel" src={Travel1} alt="travel1" />
      <img className="travel" src={Travel2} alt="travel2" />
    </div>
  )
};

export default Travel;