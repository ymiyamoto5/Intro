import React from 'react';
import './About.css'
import SubPageHeader from '../Components/SubPageHeader'
import Title from '../Components/Title'
import DevEnv from '../images/devenv.jpg'

const About = () => {
  return (
    <div>
      <SubPageHeader />
      <div id="main">
        <section className="box">
          <Title name="About this site"></Title>
          <img className="devenv" src={DevEnv} alt="開発構成図" />
        </section>
      </div>
    </div>
  )
};

export default About;