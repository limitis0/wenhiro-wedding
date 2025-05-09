import React from 'react';
import TextBtn from '../../components/textBtn/TextBtn';
import classes from './LanguageBtn.module.scss';
import PropTypes from 'prop-types';

function LanguageBtn(props) {
  const { lanCode, onLanguageChange } = props;

  const lanList = ['中文', 'EN', '日本語'];

  const handleLanguageCode = (localLanCode) => {
    switch (localLanCode) {
      case 0:
        return 'zh';
      case 1:
        return 'en';
      case 2:
        return 'jp';
      default:
        return 'zh';
    }
  };

  const handleLanguageChosen = (localLanCode) =>
    onLanguageChange(handleLanguageCode(localLanCode));

  return (
    <div className={classes.languageBtnContainer}>
      {lanList.map((value, i) => (
        <TextBtn
          key={i}
          text={value}
          onClick={() => handleLanguageChosen(i)}
          isChosen={handleLanguageCode(i) === lanCode}
        />
      ))}
    </div>
  );
}

LanguageBtn.propTypes = {
  lanCode: PropTypes.string.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
};

export default LanguageBtn;
