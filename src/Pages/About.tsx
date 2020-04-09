import React from 'react';
import './About.css'
import SubPageHeader from '../Components/SubPageHeader'
import Title from '../Components/Title'

const About = () => {
  return (
    <div>
      <SubPageHeader />
      <div id="main">
        <section className="box">
          <Title name="About"></Title>
          <div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default About;