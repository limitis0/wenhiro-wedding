import React from 'react';
import PropTypes from 'prop-types'
import classes from './MainTitle.module.scss';

function MainTitle(props) {
  const {text, align, isUnderline} = props;

  const handleIsUnderline = isUnderline ? 'isUnderLineTrue': 'isUnderLineFalse'; 
  return(
    <div className={`${classes.general} ${classes[handleIsUnderline]} ${classes[align]}`}>
      {text}
    </div>
  )
}


MainTitle.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired, //'start' | 'center'
  isUnderline: PropTypes.bool.isRequired
}



export default MainTitle