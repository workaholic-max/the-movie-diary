import PropTypes from 'prop-types';

export const buttonPropTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  disableDefaultClassName: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

export const buttonDefaultProps = {
  className: '',
  type: 'button',
  disabled: false,
  disableDefaultClassName: false,
  onClick: () => {},
  onSubmit: () => {},
};
