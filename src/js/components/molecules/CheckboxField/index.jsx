import React from 'react';
import PropTypes from 'prop-types';

import InputField from '../../atoms/InputField';

/**
 * Checkbox + label field
 */
const CheckboxField = ({ labelContent, ...props }) => (
  <div className="checkbox-field">
    {labelContent}

    <InputField type="checkbox" {...props} />

    <span className="checkmark" />
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
