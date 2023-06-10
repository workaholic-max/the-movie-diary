import PropTypes from 'prop-types';

export const SwiperSliderPropTypes = {
  sliderProps: PropTypes.object,
  slideProps: PropTypes.object,
};

export const SwiperSliderDefaultProps = {
  sliderProps: {},
  slideProps: {},
};

export const SwiperSliderArrowsPropTypes = {
  enableSmallArrows: PropTypes.bool,
  enableAbsoluteArrows: PropTypes.bool,
};

export const SwiperSliderArrowsDefaultProps = {
  enableSmallArrows: false,
  enableAbsoluteArrows: false,
};
