import React from 'react';
import PropTypes from 'prop-types';
import classes from './DressCode.module.scss';
import SubTitle from '../../components/subTitle/subTItle';

function DressCode(props) {
  const { data } = props;
  const colorList = [
    '--white',
    '--off-white',
    '--warm-beige',
    '--light-taupe',
    '--deep-khaki',
    '--dark-blue',
  ];
  return (
    <div className={classes.dressCodeContainer}>
      {/* {console.log('DressCode return', data)} */}
      <SubTitle
        text={data[0]}
        align="center"
        color="dark"
        isUnderline={false}
      />
      <div className={classes.colorCardContainer}>
        {colorList.map((value, i) => {
          return (
            <div
              key={i}
              className={`${classes.colorCard} `}
              data-aos="fade-up"
              style={{ backgroundColor: `var(${value})` }}></div>
          );
        })}
      </div>
    </div>
  );
}

DressCode.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DressCode;
