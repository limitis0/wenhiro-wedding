import React from 'react';
import PropTypes from 'prop-types';
import classes from './Intro.module.scss';
import MainTitle from '../../components/mainTitle/MainTitle';
import SubContent from '../../components/subContent/subContent';
import SubTitle from '../../components/subTitle/subTItle';

function Intro(props) {
  const { data } = props;
  return (
    <div className={classes.introContainer}>
      {/* {console.log('Intro return()', data)} */}
      <div className={classes.introCard}>
        <div
          className={`${classes.introPhoto} ${classes.hiroPhoto}`}
          data-aos="fade-right"></div>
        <div
          className={`${classes.introTextContainer} ${classes.hiroTextContainer}`}
          data-aos="fade-left">
          {data.hiro.map((value, i) => {
            if (i !== 0) {
              return (
                <div
                  className={classes.introText}
                  key={i}>
                  <SubContent
                    text={value}
                    align="start"
                    color="light"
                    isUnderline={false}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        className={classes.mainTitleContainer}
        data-aos="zoom-in">
        <div className={`${classes.mainTitleItem} ${classes.mainTitleUp}`}>
          <SubTitle
            text={data.hiro[0]}
            align="center"
            color="dark"
            isUnderline={false}
          />
        </div>

        <div className={`${classes.mainTitleItem} ${classes.mainTitleMid}`}>
          <SubTitle
            text="✕"
            align="center"
            color="dark"
            isUnderline={false}
          />
        </div>
        <div className={`${classes.mainTitleItem} ${classes.mainTitleDown}`}>
          <SubTitle
            text={data.wen[0]}
            align="center"
            color="dark"
            isUnderline={false}
          />
        </div>
      </div>
      <div className={`${classes.introCard} ${classes.wenCard}`}>
        <div
          className={`${classes.introPhoto} ${classes.wenPhoto}`}
          data-aos="fade-left"></div>
        <div
          className={`${classes.introTextContainer} ${classes.wenTextContainer}`}
          data-aos="fade-right">
          {data.wen.map((value, i) => {
            if (i !== 0) {
              return (
                <div
                  className={classes.introText}
                  key={i}>
                  <SubContent
                    text={value}
                    align="start"
                    color="light"
                    isUnderline={false}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Intro;
