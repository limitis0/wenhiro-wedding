import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header2.module.scss';
import SubContent from '../../components/subContent/subContent';
import SubTitle from '../../components/subTitle/subTItle';

function Header2(props) {
  const { data } = props;
  return (
    <div
      className={classes.header2Container}
      data-aos="fade-left">
      {/* {console.log('Header2 return()', data)} */}
      {data.map((value, i) => {
        if (i === 0) {
          return (
            <div
              className={`${classes.photoText}`}
              data-aos="fade-right"
              data-aos-delay="500"
              key={i}>
              <SubTitle
                text={value}
                align="left"
                color="light"
                isUnderline={false}
              />
            </div>
          );
        } else {
          return (
            <div
              className={`${classes.photoText} ${classes.subText}`}
              data-aos="fade-right"
              data-aos-delay="500"
              key={i}>
              <SubContent
                text={value}
                align="start"
                color="light"
                isUnderline={false}
                isSmall
              />
            </div>
          );
        }
      })}
    </div>
  );
}

Header2.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Header2;
