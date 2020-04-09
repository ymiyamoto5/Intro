import React from 'react';
import SubPageHeader from '../Components/SubPageHeader';
import Title from '../Components/Title';
import Cats from '../Components/Cats';
import './Photo.css';

const Photo = () => {
  return (
    <div>
      <SubPageHeader />
      <div id="main">
        <section className="box">
          <div className="title">
            <Title name="photos"></Title>
          </div>
          <div id="photos">
            <Cats></Cats>
          </div>
        </section>
      </div>
    </div>
  )
};


export default Photo;