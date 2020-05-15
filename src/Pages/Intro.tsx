import React from 'react';
import './Intro.css'
import SubPageHeader from '../Components/SubPageHeader'
import Title from '../Components/Title'
import Face from '../Components/Face'
import GoogleMap from '../Components/GoogleMap'
import Personal from '../images/other/personal.jpg'

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
                <dt>家族構成：</dt>
                <dd>妻/猫2匹</dd>
                <dt>出身地：</dt>
                <dd>徳島</dd>
                <dt>性格：</dt>
                <dd>
                  <a href={Personal}>管理者型</a>
                  <a href="https://www.16personalities.com/ja/istj%E5%9E%8B%E3%81%AE%E6%80%A7%E6%A0%BC">(説明)</a>
                </dd>
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