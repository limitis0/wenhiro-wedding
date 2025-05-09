import React from 'react';
import PropTypes from 'prop-types';
import classes from './TextBtn.module.scss';

function TextBtn(props) {
  const { text, onClick, isChosen } = props;

  const handleIsChosen = isChosen ? 'chosen' : 'default';

  return (
    <div
      className={`${classes.btnContainer} ${classes[handleIsChosen]}`}
      onClick={onClick}>
      {text}
    </div>
  );
}

TextBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isChosen: PropTypes.bool.isRequired,
};

export default TextBtn;
