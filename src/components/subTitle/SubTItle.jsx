import React from 'react';
import PropTypes from 'prop-types';
import classes from './SubTitle.module.scss';

/**
 *
 * @param {{
 * text: string
 * align: string //'start' | 'center'
 * isUnderline: boolean
 * }} props
 * @returns
 */

function SubTitle(props) {
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

SubTitle.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired, //'start' | 'center'
  color: PropTypes.string.isRequired, //'dark' | 'light' |
  isUnderline: PropTypes.bool.isRequired,
};

export default SubTitle;
