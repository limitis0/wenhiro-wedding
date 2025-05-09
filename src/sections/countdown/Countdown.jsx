import React, { useEffect, useState } from 'react';
import classes from './Countdown.module.scss';
import SubContent from '../../components/subContent/subContent';
import PropTypes from 'prop-types';

function Countdown(props) {
  const { data } = props;

  const targetDate = '2025-06-28T12:00:00';
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // 補零的輔助函數
  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className={classes.countdownContainer}>
      <SubContent
        text={`${formatNumber(timeLeft.days)}${data[0]} ${formatNumber(timeLeft.hours)}${data[1]} ${formatNumber(timeLeft.minutes)}${data[2]} ${formatNumber(timeLeft.seconds)}${data[3]}`}
        align="center"
        color="light"
        isUnderline={false}
        isSmall
      />
    </div>
  );
}

Countdown.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Countdown;
