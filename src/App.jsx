import React, { useEffect, useRef, useState } from 'react';

import AOS from 'aos';
import LanguageBtn from './sections/languageBtn/LanguageBtn';
import Countdown from './sections/countdown/Countdown';
import Header1 from './sections/header1/Header1';
import Header2 from './sections/header2/Header2';
import Intro from './sections/intro/intro';
import Invite from './sections/invite/Invite';
import Map from './sections/map/Map';
import Schedule from './sections/schedule/Schedule';
import DressCode from './sections/dressCode/DressCode';
import PhotoGalary from './sections/photoGalary/PhotoGalary';
import AttendancrForm from './sections/attendanceForm/AttendancrForm';
import BackBtn from './components/backBtn/BackBtn';
import MusicBtn from './components/musicBtn/MusicBtn';

import './App.scss';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lanCode, setLanCode] = useState('zh');
  const [data, setData] = useState();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 平滑滾動，可替換成 "auto" 即可立即滾動
    });
  };

  const handleLanguageChange = (newLanCode) => {
    setLanCode(newLanCode);

    if (newLanCode === 'jp') {
      document.body.classList.add('japanese-font');
    } else {
      document.body.classList.remove('japanese-font');
    }
  };

  useEffect(() => {
    // 模擬資源載入時間
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    AOS.init({
      duration: 2000, // 動畫持續時間（毫秒）
      once: false, // 設定為 false，讓滾動回來時可以重新觸發
      mirror: true, // 是否在滾回來時再次觸發
      offset: 10, // 滾動到距離視口 10px 時觸發
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // 當語言切換或內容改變時，重新偵測 AOS
  }, [data]);

  useEffect(() => {
    fetch(`/data/data_${lanCode}.json`)
      .then((response) => response.json())
      .then((resData) => {
        // console.log('App()', resData);
        // 在這裡處理取得的 JSON 資料
        setData(resData);
      })
      .catch((error) => {
        console.error('Error fetching JSON:', error);
      });
  }, [lanCode]);

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="circle-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <div className="topSection">
        <LanguageBtn
          lanCode={lanCode}
          onLanguageChange={handleLanguageChange}
        />
        {data !== undefined && <Countdown data={data.countdown} />}
      </div>
      <div className="btmSection">
        <MusicBtn />
        <BackBtn handleBackBtnOnClick={scrollToTop} />
      </div>
      {/* {console.log('App() render: ', data)} */}
      {data !== undefined && (
        <Header1
          data={data.header1}
          lanCode={lanCode}
          key={lanCode}
        />
      )}
      {data !== undefined && <Header2 data={data.header2} />}
      {data !== undefined && <Intro data={data.intro} />}
      {data !== undefined && <Invite data={data.invite} />}
      {data !== undefined && <Map data={data.map} />}
      {data !== undefined && <Schedule data={data.schedule} />}
      {data !== undefined && <DressCode data={data.dressCode} />}
      {data !== undefined && <PhotoGalary data={data.photoGalary} />}
      {data !== undefined && <AttendancrForm data={data.attendanceForm} />}
    </>
  );
}

export default App;
