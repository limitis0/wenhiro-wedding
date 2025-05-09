import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SubTitle from '../../components/subTitle/subTItle';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './PhotoGalary.module.scss';

function PhotoGalary(props) {
  const { data } = props;
  const [isMobileSize, setIsMobileSize] = useState(false);
  const photoList = [
    'A1200333',
    'A1200461',
    'A1200563',
    // 'A1200598',
    'A1200651',
    'A1200660',
    'A1200754',
    // 'A1201083',
    'A1201141',
    // 'A1201197',
    // 'A1201210',
    // 'A1201215',
    // 'A1201232',
    // 'A1201239',
    // 'A1201260',
    'A1201313',
    // 'A1201345',
    // 'A1201411',
    'A1201447',
    'A1201509',
    // 'A1201535',
    'A1201608',
    'A1201677',
    'A1201772',
    // 'A1201775',
    'A1201796',
    // 'A1201803',
    'A1201859',
    'A1201909',
    // 'A1202014',
  ];

  useEffect(() => {
    setIsMobileSize(window.innerWidth < 1160);
  }, []);

  return (
    <div className={classes.photoGalaryContainer}>
      {/* {console.log('DressCode return', data)} */}
      <SubTitle
        text={data[0]}
        align={isMobileSize ? 'center' : 'start'}
        color="dark"
        isUnderline={false}
      />

      <div className={classes.photoRollContainer}>
        <Swiper
          slidesPerView={isMobileSize ? 2 : 6}
          spaceBetween={24}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className={classes.photosSwiper}>
          {photoList.map((value, i) => (
            <SwiperSlide
              key={i}
              className={`${classes.photoSlide}`}
              style={{
                background: `url('/photos/30Selected/${value}.jpg') 50% / cover no-repeat`,
              }}></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

PhotoGalary.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PhotoGalary;
