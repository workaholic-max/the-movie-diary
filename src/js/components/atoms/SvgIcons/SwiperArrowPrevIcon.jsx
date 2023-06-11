import React from 'react';
import PropTypes from 'prop-types';

const SwiperArrowPrevIcon = (props) => (
  <svg
    className="gl-icon gl-icon--swiper-arrow-prev"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <polyline points="16,4 8,12 16,20" stroke="currentColor" />
  </svg>
);

SwiperArrowPrevIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

SwiperArrowPrevIcon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
};

export default SwiperArrowPrevIcon;
