import PropTypes from 'prop-types';

export const buttonPropTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning']).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  enableRounded: PropTypes.bool,
  onClick: PropTypes.func,
};

export const buttonDefaultProps = {
  type: 'button',
  className: '',
  disabled: false,
  enableRounded: false,
  onClick: () => {},
};
