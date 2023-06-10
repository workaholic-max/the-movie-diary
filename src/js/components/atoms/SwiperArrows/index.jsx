import React, { forwardRef } from 'react';
import classNames from 'classnames';

import {
  SwiperSliderArrowsPropTypes,
  SwiperSliderArrowsDefaultProps,
} from '../../../propTypes/swiperSliderProps';
import Button from '../Button';
import SwiperArrowPrevIcon from '../SvgIcons/SwiperArrowPrevIcon';

export const SwiperArrowPrev = forwardRef(({ enableSmallArrows, enableAbsoluteArrows }, ref) => {
  const className = classNames({
    'gl-swiper-arrow gl-swiper-arrow--prev': true,
    'gl-swiper-arrow--small': enableSmallArrows,
    'gl-swiper-arrow--absolute': enableAbsoluteArrows,
  });

  return (
    <Button ref={ref} theme="primary" className={className}>
      <SwiperArrowPrevIcon />
    </Button>
  );
});

SwiperArrowPrev.propTypes = SwiperSliderArrowsPropTypes;
SwiperArrowPrev.defaultProps = SwiperSliderArrowsDefaultProps;

export const SwiperArrowNext = forwardRef(({ enableSmallArrows, enableAbsoluteArrows }, ref) => {
  const className = classNames({
    'gl-swiper-arrow gl-swiper-arrow--next': true,
    'gl-swiper-arrow--small': enableSmallArrows,
    'gl-swiper-arrow--absolute': enableAbsoluteArrows,
  });

  return (
    <Button ref={ref} theme="primary" className={className}>
      <SwiperArrowPrevIcon />
    </Button>
  );
});

SwiperArrowNext.propTypes = SwiperSliderArrowsPropTypes;
SwiperArrowNext.defaultProps = SwiperSliderArrowsDefaultProps;
