import React from 'react';
import PropTypes from 'prop-types';
import classes from './MainContent.module.scss';

function MainContent(props) {
  const { text, align, color, isUnderline } = props;

  const handleIsUnderline = isUnderline
    ? 'isUnderLineTrue'
    : 'isUnderLineFalse';

  return (
    <div
      className={`${classes.general} ${classes[align]} ${classes[color]} ${classes[handleIsUnderline]}`}>
      {text}
    </div>
  );
}

MainContent.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired, // 'start' | 'center'
  color: PropTypes.string.isRequired, // 'dark' | 'light'
  isUnderline: PropTypes.bool.isRequired,
};

export default MainContent;
