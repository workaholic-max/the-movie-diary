import React, { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

import { getProcessedSwiperSliderProps } from '../../../utils/swiperSliderUtils';
import {
  SwiperSliderPropTypes,
  SwiperSliderDefaultProps,
} from '../../../propTypes/swiperSliderProps';
import { DEFAULT_SLIDER_SETTINGS } from './config';

/**
 * Swiper slider
 */
const SwiperSlider = forwardRef(({ sliderProps, slideProps, children, ...restProps }, ref) => {
  const { className, ...swiperSliderProps } = getProcessedSwiperSliderProps(
    {
      ...DEFAULT_SLIDER_SETTINGS,
      ...sliderProps,
      ...restProps,
    },
    children.length,
  );

  return (
    <Swiper ref={ref} className={classNames('gl-swiper', className)} {...swiperSliderProps}>
      {children.map((slide) => (
        <SwiperSlide key={`slide_${slide.key}`} {...slideProps}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
});

SwiperSlider.propTypes = SwiperSliderPropTypes;
SwiperSlider.defaultProps = SwiperSliderDefaultProps;

export default SwiperSlider;
