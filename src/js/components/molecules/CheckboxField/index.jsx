import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../atoms/Input';

/**
 * Checkbox input + label field
 */
const CheckboxField = ({ labelContent, ...props }) => (
  <div className="gl-checkbox-field">
    {labelContent}

    <Input type="checkbox" {...props} />

    <span className="gl-checkbox-field__checkmark" />
  </div>
);

CheckboxField.propTypes = {
  id: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckboxField.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default CheckboxField;
