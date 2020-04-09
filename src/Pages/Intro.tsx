import React from 'react';
import './Intro.css'
import SubPageHeader from '../Components/SubPageHeader'
import Title from '../Components/Title'
import Face from '../Components/Face'
import GoogleMap from '../Components/GoogleMap'

const Intro = () => {
  return (
    <div>
      <SubPageHeader />
      <div id="main">
        <section className="box">
          <Title name="Introduction"></Title>
          <div>
            2008年ユニアデックス入社<br />
            SQL Server主管部にて主にサポート業務に従事<br />
            2018年より開発部署に異動、WebAP/IoT/AI関連開発<br />
          </div>
          <div className="fbox">
            <div className="fbox-left">
              <Face />
              <dl className="info">
                <dt>名前：</dt>
                <dd>宮本　裕也</dd>
                <dt>家族：</dt>
                <dd>妻/猫2匹</dd>
                <dt>出身地：</dt>
                <dd>徳島</dd>
              </dl>
            </div>
            <div className="fbox-right">
              <div className="location-map">
                <GoogleMap />
              </div>
            </div>

          </div>

        </section>
      </div>
    </div>
  )
}

export default Intro;