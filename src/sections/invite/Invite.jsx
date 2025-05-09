import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SubTitle from '../../components/subTitle/subTItle';
import SubContent from '../../components/subContent/subContent';
import classes from './Invite.module.scss';

function Invite(props) {
  const { data } = props;
  const [isMobileSize, setIsMobileSize] = useState(false);

  useEffect(() => {
    setIsMobileSize(window.innerWidth < 1160);
  }, []);

  return (
    <div className={classes.inviteContainer}>
      {/* {console.log('Invite', data)} */}
      <div className={classes.invitePhotoContainer}>
        <div
          className={`${classes.singlePhotoContainer} ${classes.right}`}
          data-aos="fade-left">
          <div
            className={`${classes.invitePhoto} ${classes.invitePhoto1}`}></div>
        </div>
        <div
          className={`${classes.singlePhotoContainer} ${classes.left}`}
          data-aos="fade-right">
          <div
            className={`${classes.invitePhoto} ${classes.invitePhoto2}`}></div>
        </div>
        <div
          className={`${classes.singlePhotoContainer} ${classes.right}`}
          data-aos="fade-left">
          <div
            className={`${classes.invitePhoto} ${classes.invitePhoto3}`}></div>
        </div>
      </div>
      <div
        className={classes.inviteTextContainer}
        data-aos="fade-up">
        {data.map((value, i) => {
          if (i === 0) {
            return (
              <div
                key={i}
                className={classes.inviteTitle}>
                <SubTitle
                  text={value}
                  align={isMobileSize ? 'center' : 'start'}
                  color="dark"
                  isUnderline={false}
                />
              </div>
            );
          } else if (i === 3) {
            return (
              <div
                key={i}
                className={classes.inviteContent}>
                <SubContent
                  text={value}
                  align={isMobileSize ? 'center' : 'start'}
                  color="dark"
                  isUnderline={false}
                  isSmall={true}
                />
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className={classes.inviteContent}>
                <SubContent
                  text={value}
                  align={isMobileSize ? 'center' : 'start'}
                  color="dark"
                  isUnderline={false}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

Invite.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Invite;
