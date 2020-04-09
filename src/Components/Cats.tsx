import React from 'react';
import './Cats.css';
import Cat1 from '../images/cats/IMG_20161116_083242.jpg';
import Cat2 from '../images/cats/1522650685311.jpg';
import Cat3 from '../images/cats/IMAG0581.jpg';
import Cat4 from '../images/cats/IMG_0069.jpg';


const Cats = () => {
  return (
    <div className="wrapper grid">
      <img className="cat" src={Cat1} alt="cat1" />
      <img className="cat" src={Cat2} alt="cat2" />
      <img className="cat" src={Cat3} alt="cat3" />
      <img className="cat" src={Cat4} alt="cat4" />
    </div>
  )
};

export default Cats;