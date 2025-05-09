import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MainTitle from '../../components/mainTitle/MainTitle';
import MainContent from '../../components/mainContent/MainContent';
import SubContent from '../../components/subContent/subContent';
import TextBtn from '../../components/textBtn/TextBtn';
import classes from './Attendance.module.scss';

function AttendancrForm(props) {
  const { data } = props;
  const [isMobileSize, setIsMobileSize] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    attending: 'yes',
    totalCount: '0',
    alcoholic: 'yes',
    restrictions: [],
    otherRestrictions: '',
    message: '',
  });

  // 處理忌口多選名稱（統一成英文小寫）
  const handleRestrictionName = (oriName) => {
    switch (oriName) {
      case '牛':
      case 'Beef':
      case '牛肉':
        return 'beef';
      case '鴨':
      case 'Duck':
      case '鴨肉':
        return 'duck';
      case '魚':
      case 'Fish':
        return 'fish';
      case '蛋／奶':
      case 'Egg/Milk':
      case '卵・乳':
        return 'eggAndMilk';
      case '生食魚／肉':
      case 'Raw Fish/Meet':
      case '生魚・生肉':
        return 'rawFresh';
      default:
        return 'f';
    }
  };

  // 處理一般 input (文字、數字、radio) 的變更
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 處理時間格式
  const handleTimeStamp = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const date = now.getDate().toString().padStart(2, '0');

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const ampm = hours >= 12 ? '下午' : '上午';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours; // 12 小時制

    return `${year}/${month}/${date} ${ampm} ${hours}:${minutes}:${seconds}`;
  };

  // 處理複選框
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let newRestrictions = [...prev.restrictions];
      if (checked) {
        newRestrictions.push(value);
      } else {
        newRestrictions = newRestrictions.filter((item) => item !== value);
      }
      return { ...prev, restrictions: newRestrictions };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 這邊可以依需求送出表單數據
    console.log('表單數據：', {
      ...formData,
      restrictions: formData.restrictions.map((value) =>
        handleRestrictionName(value)
      ),
    });

    fetch('https://sheetdb.io/api/v1/gd2lcz372h5u8', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          ...formData,
          restrictions: formData.restrictions.map((value) =>
            handleRestrictionName(value).toString()
          ),
          timeStamp: handleTimeStamp(),
        },
      }),
    })
      .then((response) => response.json())
      .then((rtData) => {
        // console.log(rtData);
        alert(data[13]);
        setFormData({
          name: '',
          companyName: '',
          attending: 'yes',
          totalCount: '0',
          alcoholic: 'yes',
          restrictions: [],
          otherRestrictions: '',
          message: '',
        });
      });
  };

  useEffect(() => {
    setIsMobileSize(window.innerWidth < 1160);
  }, []);

  return (
    <div
      className={classes.formContainer}
      data-aos="fade-down">
      <MainTitle
        text={data[0]}
        align="center"
        isUnderline={false}
      />
      <form
        className={classes.form}
        onSubmit={handleSubmit}>
        {/* 出席 */}
        <div className={classes.singleChoiceWTitle}>
          <MainContent
            text={data[15]}
            align="start"
            color="dark"
            isUnderline={false}
          />
          <div className={`${classes.singleChoice} ${classes.inputSection}`}>
            <label className={classes.radioLable}>
              <input
                className={classes.radioInput}
                type="radio"
                name="attending"
                value="yes"
                checked={formData.attending === 'yes'}
                onChange={handleChange}
              />
              <MainContent
                text={data[1]}
                align="start"
                color="dark"
                isUnderline={false}
              />
            </label>
            <label className={classes.radioLable}>
              <input
                className={classes.radioInput}
                type="radio"
                name="attending"
                value="no"
                checked={formData.attending === 'no'}
                onChange={handleChange}
              />
              <MainContent
                text={data[2]}
                align="start"
                color="dark"
                isUnderline={false}
              />
            </label>
          </div>
        </div>
        {/* 主要姓名 */}
        <div className={`${classes.shortText} ${classes.inputSection}`}>
          <label className={classes.shortTextLabel}>
            <MainContent
              text={data[3]}
              align="start"
              color="dark"
              isUnderline={false}
            />
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={data[14][0]}
          />
        </div>
        {/* 陪同姓名 */}
        <div className={`${classes.shortText} ${classes.inputSection}`}>
          <label className={classes.shortTextLabel}>
            <MainContent
              text={data[4]}
              align="start"
              color="dark"
              isUnderline={false}
            />
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder={data[14][0]}
          />
        </div>
        {/* 總人數 */}
        <div className={`${classes.shortText} ${classes.inputSection}`}>
          <label className={classes.shortTextLabel}>
            <MainContent
              text={data[5]}
              align="start"
              color="dark"
              isUnderline={false}
            />
          </label>
          <input
            type="number"
            name="totalCount"
            value={formData.totalCount}
            onChange={handleChange}
          />
        </div>
        {/* 酒精 */}
        <div className={classes.singleChoiceWTitle}>
          <MainContent
            text={data[16][0]}
            align="start"
            color="dark"
            isUnderline={false}
          />
          <div className={`${classes.singleChoice} ${classes.inputSection}`}>
            <label className={classes.radioLable}>
              <input
                className={classes.radioInput}
                type="radio"
                name="alcoholic"
                value="yes"
                checked={formData.alcoholic === 'yes'}
                onChange={handleChange}
              />
              <MainContent
                text={data[16][1]}
                align="start"
                color="dark"
                isUnderline={false}
              />
            </label>
            <label className={classes.radioLable}>
              <input
                className={classes.radioInput}
                type="radio"
                name="alcoholic"
                value="no"
                checked={formData.alcoholic === 'no'}
                onChange={handleChange}
              />
              <MainContent
                text={data[16][2]}
                align="start"
                color="dark"
                isUnderline={false}
              />
            </label>
          </div>
        </div>
        {/* 忌口 */}
        <div className={`${classes.multipleChoice} ${classes.inputSection}`}>
          <label>
            <MainContent
              text={data[6]}
              align="start"
              color="dark"
              isUnderline={false}
            />
          </label>
          <div className={`${classes.checkboxGroup} ${classes.inputSection}`}>
            {data[7].map((value, i) => {
              return (
                <label
                  key={i}
                  className={classes.checkboxLabel}>
                  <input
                    className={classes.checkboxInput}
                    type="checkbox"
                    name="restrictions"
                    value={value}
                    checked={formData.restrictions.includes(value)}
                    onChange={handleCheckboxChange}
                  />
                  <SubContent
                    text={value}
                    color="dark"
                    align="start"
                    isUnderline={false}
                    // isSmall={isMobileSize}
                  />
                </label>
              );
            })}
          </div>
        </div>
        {/* 其他忌口 */}
        <div className={`${classes.shortText} ${classes.inputSection}`}>
          <label className={classes.shortTextLabel}>
            <MainContent
              text={data[10]}
              align="start"
              color="dark"
              isUnderline={false}
            />
            <SubContent
              text={data[14][1]}
              align="start"
              color="dark"
              isSmall
              isUnderline={false}
            />
          </label>
          <input
            type="text"
            name="otherRestrictions"
            value={formData.otherRestrictions}
            onChange={handleChange}
            placeholder={data[14][2]}
          />
        </div>
        {/* 想說的話 */}
        <div className={`${classes.inputSection}`}>
          <label>
            <MainContent
              text={data[11]}
              align="start"
              color="dark"
              isUnderline={false}
            />
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        {/* 送出 */}
        <TextBtn
          type="submit"
          text={data[12]}
          isChosen={false}
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

AttendancrForm.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AttendancrForm;
