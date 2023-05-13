import PropTypes from 'prop-types';

export const inputPropTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  checked: PropTypes.bool,
  isInputUncontrolled: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export const inputDefaultProps = {
  value: '',
  className: '',
  placeholder: null,
  checked: false,
  disabled: false,
  isInputUncontrolled: false,
  onChange: () => {},
};
