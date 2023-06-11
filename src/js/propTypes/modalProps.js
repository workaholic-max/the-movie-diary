import PropTypes from 'prop-types';

export const modalPropTypes = {
  className: PropTypes.string,
  enableCloseOnEsc: PropTypes.bool,
  enableCloseOnOverlayClick: PropTypes.bool,
  onClose: PropTypes.func,
};

export const modalDefaultProps = {
  className: '',
  enableCloseOnEsc: false,
  enableCloseOnOverlayClick: false,
  onClose: () => {},
};
