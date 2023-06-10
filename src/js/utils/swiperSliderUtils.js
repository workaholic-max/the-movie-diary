/**
 * Check if "slides per view" is valid
 * (if the length of the slides is less than the needed value, return the length of the slides)
 *
 * @param slidesPerView {Number}
 * @param slidesLength {Number}
 *
 * @return {Number}
 */
export const getProcessedSlidesPerView = (slidesPerView, slidesLength) =>
  (slidesLength < slidesPerView ? slidesLength : slidesPerView);

/**
 * Check if "loop" is valid
 * (if we have less than 1 slide we don't need to loop)
 *
 * @param isLoopActivated {Boolean}
 * @param slidesLength {Number}
 *
 * @return {Boolean}
 */
export const getProcessedLoop = (isLoopActivated, slidesLength) =>
  isLoopActivated && slidesLength > 1;

/**
 * Get processed "breakpoints"
 * (process: loop, slidesPerView)
 *
 * @param breakpoints {Object}
 * @param slidesLength {Number}
 *
 * @return {Object}
 */
const getProcessedBreakpoints = (breakpoints, slidesLength) => {
  const breakpointsKeys = Object.keys(breakpoints || {});

  if (!breakpointsKeys) {
    return {};
  }

  const KEYS_TO_PROCESS = ['loop', 'slidesPerView'];

  const modifiers = {
    loop: getProcessedLoop,
    slidesPerView: getProcessedSlidesPerView,
  };

  const processedBreakpoints = breakpointsKeys.reduce((breakpointsResult, breakpoint) => {
    const breakpointKeys = Object.keys(breakpoints[breakpoint]);

    breakpointsResult[breakpoint] = breakpointKeys.reduce((breakpointResult, key) => {
      const value = breakpoints[breakpoint][key];

      if (KEYS_TO_PROCESS.includes(key)) {
        breakpointResult[key] = modifiers[key](value, slidesLength);
      } else {
        breakpointResult[key] = value;
      }

      return breakpointResult;
    }, {});

    return breakpointsResult;
  }, {});

  return { breakpoints: processedBreakpoints };
};

/**
 * Get processed props for slider
 * (process: loop, slidesPerView)
 *
 * @param swiperSliderProps {Object}
 * @param slidesLength {Number}
 *
 * @return {Object}
 */
export const getProcessedSwiperSliderProps = (swiperSliderProps, slidesLength) => {
  const { loop, slidesPerView, breakpoints } = swiperSliderProps;

  return {
    ...swiperSliderProps,
    slidesPerView: getProcessedSlidesPerView(slidesPerView, slidesLength),
    loop: getProcessedLoop(loop, slidesLength),
    ...getProcessedBreakpoints(breakpoints, slidesLength),
  };
};
