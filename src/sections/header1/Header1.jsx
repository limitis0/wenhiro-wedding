import React, { useEffect, useState } from 'react';
import classes from './Header1.module.scss';
import MainTitle from '../../components/mainTitle/MainTitle';
import PropTypes from 'prop-types';
import MainContent from '../../components/mainContent/MainContent';

function Header1(props) {
  const { data, lanCode } = props;
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    setIsMobileSize(window.innerWidth < 1160);
  }, []);

  return (
    <div className={classes.header1Container}>
      {/* {console.log('Header1 return:', data)} */}
      <div
        className={classes.header1Photo}
        data-aos="fade-right"></div>
      <div
        className={classes.header1Text}
        data-aos="fade-up">
        {data.map((value, i) => {
          if (i === 0 && lanCode !== 'en') {
            return (
              <div
                className={classes.mainTitle}
                key={i}>
                <MainTitle
                  text={value}
                  align={isMobileSize ? 'center' : 'start'}
                  isUnderline={false}
                />
              </div>
            );
          } else if (i <= 2 && lanCode === 'en') {
            return (
              <div
                className={classes.mainTitle}
                key={i}>
                <MainTitle
                  text={value}
                  align={isMobileSize ? 'center' : 'start'}
                  isUnderline={false}
                />
              </div>
            );
          } else
            return (
              <div
                className={classes.subTitle}
                key={i}>
                <MainContent
                  text={value}
                  align={isMobileSize ? 'center' : 'start'}
                  color="dark"
                  isUnderline={false}
                />
              </div>
            );
        })}
      </div>
    </div>
  );
}

Header1.propTypes = {
  data: PropTypes.array.isRequired,
  lanCode: PropTypes.string.isRequired,
};

export default Header1;
