import React from 'react';
import './About.css'
import SubPageHeader from '../Components/SubPageHeader'
import Title from '../Components/Title'

const Topic = () => {
  return (
    <div>
      <SubPageHeader />
      <div id="main">
        <Title name="Topic"></Title>
        <ul>
          <li>引っ越しを繰り返したが、本当はそんなに引っ越したくなかった件</li>
          <li>ガリ勉だった義務教育時代</li>
          <li>今でも後悔する高校生活とギター</li>
          <li>間違った大学デビュー</li>
          <li>人生の羅針盤を見失った留年、大学院生活</li>
          <li>同期ほとんど残っていない問題</li>
          <li>猫が生活の中心、むしろ来世は猫になりたい</li>
          <li>ビーチリゾートなんて好きじゃなかったのに好きになってしまった件</li>
          <li>シュノーケルでダブルピース事件</li>
          <li>ハマりにハマったSFC, Playstation1/2</li>
          <li>歌好きがこうじてカラオケ店でバイト</li>
          <li>震災直後に30,000円負けて麻雀引退した件</li>
          <li>リングフィットアドベンチャーLv100</li>
          <li>マンガがあれば100年くらい自宅待機できそうな件</li>
          <li>ネットがあれば200年くらい自宅待機できそうな件</li>
          <li>10年保守業務して、結局あんまり向いていないと気付いた件</li>
          <li>熱しやすく冷めやすい</li>
          <li>大切にしていること</li>
        </ul>
      </div>
    </div>
  )
};

export default Topic;