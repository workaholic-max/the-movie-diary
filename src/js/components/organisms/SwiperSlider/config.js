import { Navigation, FreeMode } from 'swiper';

export const DEFAULT_SLIDER_SETTINGS = {
  modules: [Navigation, FreeMode],
  slidesPerView: 1,
  pagination: false,
  navigation: false,
  loop: false,
  noSwiping: false,
  allowTouchMove: true,
  observer: true,
  observeParents: true,
};
