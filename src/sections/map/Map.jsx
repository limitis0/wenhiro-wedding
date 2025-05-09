import React, { useEffect, useState } from 'react';
import classes from './Map.module.scss';
import PropTypes from 'prop-types';
import SubContent from '../../components/subContent/subContent';
import SubTitle from '../../components/subTitle/subTItle';

function Map(props) {
  const { data } = props;
  const [isMobileSize, setIsMobileSize] = useState(false);
  useEffect(() => {
    setIsMobileSize(window.innerWidth < 1160);
  }, []);

  return (
    <div
      className={classes.mapContainer}
      data-aos="fade-up">
      {/* {console.log('Map return', data)} */}
      <SubTitle
        text={data[0]}
        align={isMobileSize ? 'center' : 'start'}
        color="dark"
        isUnderline={false}
      />
      <div className={classes.mapContent}>
        {data.map((value, i) => {
          if (i === 1) {
            return (
              <SubContent
                key={i}
                text={value}
                align={isMobileSize ? 'center' : 'start'}
                color="dark"
                isUnderline={false}
                isItalic
                isWeirdFont
              />
            );
          } else if (i >= 4) {
            return (
              <div
                key={i}
                className={classes.btmText}>
                <SubContent
                  text={value}
                  align={isMobileSize ? 'center' : 'start'}
                  color="dark"
                  isUnderline={false}
                  isSmall
                  isItalic
                />
              </div>
            );
          } else if (i !== 0)
            return (
              <SubContent
                key={i}
                text={value}
                align={isMobileSize ? 'center' : 'start'}
                color="dark"
                isUnderline={false}
                isSmall
              />
            );
        })}
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0379401530995!2d121.51244077495431!3d25.03278647781717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99f5195da23%3A0xc2b9d880c0732926!2z6aaZ6ImyIFhJQU5HIFNF!5e0!3m2!1szh-TW!2stw!4v1741243042575!5m2!1szh-TW!2stw"
        className={classes.embedMap}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

Map.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Map;
