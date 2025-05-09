import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Schedule.module.scss';
import SubTitle from '../../components/subTitle/subTItle';
import SubContent from '../../components/subContent/subContent';

function Schedule(props) {
  const { data } = props;
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    setIsMobileSize(window.innerWidth < 1160);
  }, []);

  return (
    <div
      className={classes.scheduleContainer}
      data-aos="fade-up">
      {/* {console.log('Schedule return', data)} */}
      <div>
        <SubTitle
          text={data[0]}
          align="center"
          color="dark"
          isUnderline={false}
        />
      </div>
      <div className={classes.scheduleCardList}>
        <div className={classes.date}>
          {data.map((value, i) => {
            if (i !== 0 && i % 2 == 1) {
              return (
                <div
                  key={i}
                  className={classes.timeBg}>
                  <div className={classes.timeText}>
                    <SubContent
                      text={value}
                      align="start"
                      color="light"
                      isUnderline={false}
                    />
                  </div>
                  <div className={classes.timeText}>
                    <SubContent
                      text="PM"
                      align="start"
                      color="light"
                      isUnderline={false}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={classes.content}>
          {data.map((value, i) => {
            if (i !== 0 && i % 2 == 0) {
              return (
                <div
                  className={classes.contentText}
                  key={i}>
                  <SubContent
                    text={value}
                    align="start"
                    color="dark"
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

Schedule.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Schedule;
