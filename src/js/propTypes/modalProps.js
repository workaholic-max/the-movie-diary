import PropTypes from 'prop-types';

export const modalPropTypes = {
  className: PropTypes.string,
  enableCloseBtn: PropTypes.bool,
  enableCloseOnEsc: PropTypes.bool,
  enableCloseOnOverlayClick: PropTypes.bool,
  onClose: PropTypes.func,
};

export const modalDefaultProps = {
  className: '',
  enableCloseBtn: false,
  enableCloseOnEsc: false,
  enableCloseOnOverlayClick: false,
  onClose: () => {},
};
