import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './BackBtn.module.scss';

function BackBtn(props) {
  const { handleBackBtnOnClick } = props;
  return (
    <div
      className={classes.btnContainer}
      onClick={() => handleBackBtnOnClick()}>
      <div className={classes.btn}></div>
    </div>
  );
}

BackBtn.propTypes = {
  handleBackBtnOnClick: PropTypes.func.isRequired,
};

export default BackBtn;
