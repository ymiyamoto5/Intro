import React from 'react';
import SubPageHeader from '../Components/SubPageHeader';
import Title from '../Components/Title';
import Cats from '../Components/Cats';
import Travel from '../Components/Travel'
import './Photo.css';

const Photo = () => {
  return (
    <div>
      <SubPageHeader />
      <div id="main">
        <section className="box">
          <div id="photos">
            <Cats></Cats>
            <br />
            <Travel></Travel>
          </div>
        </section>
      </div>
    </div>
  )
};


export default Photo;