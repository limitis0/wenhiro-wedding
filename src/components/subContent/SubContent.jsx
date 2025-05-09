import React from 'react';
import PropTypes from 'prop-types';
import classes from './SubContent.module.scss';

function SubContent(props) {
  const { text, align, color, isUnderline, isSmall, isItalic, isWeirdFont } =
    props;

  const handleIsUnderline = isUnderline
    ? 'isUnderLineTrue'
    : 'isUnderLineFalse';

  const handleIsSmall = isSmall ? 'isSmall' : 'isDefault';
  const handleIsItalic = isItalic ? 'isItalic' : 'isItalicDefault';
  const handleIsWeirdFont = isWeirdFont ? 'isWeirdFont' : '';

  return (
    <div
      className={`${classes.general} ${classes[align]} ${classes[color]} ${classes[handleIsUnderline]} ${classes[handleIsSmall]} ${classes[handleIsItalic]} ${classes[handleIsWeirdFont]}`}>
      {text}
    </div>
  );
}

SubContent.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired, // 'start' | 'center'
  color: PropTypes.string.isRequired, // 'dark' | 'light'
  isUnderline: PropTypes.bool.isRequired,
  isSmall: PropTypes.bool,
  isItalic: PropTypes.bool,
  isWeirdFont: PropTypes.bool,
};

export default SubContent;
