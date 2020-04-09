import React from 'react';
import './Home.css'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
      <Header />

      <div id="home" className="big-bg">
        <div className="home-content wrapper">
          <h2 className="page-title">My Introduction</h2>
          <p>お互いを知る活動 2020</p>
        </div>
      </div>
    </div>
  )
}

export default Home