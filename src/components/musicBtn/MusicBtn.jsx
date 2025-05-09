import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './MusicBtn.module.scss';

function MusicBtn(props) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 點擊按鈕時切換播放/暫停
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={classes.btnContainer}>
      {/* 音樂元件，使用 loop 讓音樂循環播放 */}
      <audio
        ref={audioRef}
        loop>
        <source
          src="music.mp3"
          type="audio/mpeg"
        />
        您的瀏覽器不支援 audio 元件。
      </audio>
      {/* 按鈕點擊可切換播放/暫停，根據狀態顯示不同圖片 */}
      <button
        className={classes.playBtn}
        onClick={togglePlay}>
        <img
          className={`${classes.btnImg} ${isPlaying ? classes.active : ''}`}
          src="music_on.png"
          alt="播放"
        />
        <img
          className={`${classes.btnImg} ${!isPlaying ? classes.active : ''}`}
          src="music_off.png"
          alt="暫停"
        />
      </button>
    </div>
  );
}

MusicBtn.propTypes = {};

export default MusicBtn;
