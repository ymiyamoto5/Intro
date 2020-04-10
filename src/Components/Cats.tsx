import React from 'react';
import './Cats.css';
import Cat1 from '../images/cats/cat01.jpg';
import Cat2 from '../images/cats/cat02.jpg';
import Cat3 from '../images/cats/cat03.jpg';
import Cat4 from '../images/cats/cat04.jpg';
import Cat5 from '../images/cats/cat05.jpg';

const Cats = () => {
  return (
    <div className="wrapper grid">
      <img className="cat" src={Cat1} alt="cat1" />
      <img className="cat" src={Cat2} alt="cat2" />
      <img className="cat" src={Cat3} alt="cat3" />
      <img className="cat" src={Cat4} alt="cat4" />
      <img className="cat" src={Cat5} alt="cat5" />
    </div>
  )
};

export default Cats;