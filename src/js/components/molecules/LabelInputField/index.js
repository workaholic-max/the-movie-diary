import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { inputPropTypes, inputDefaultProps } from '../../../propTypes/inputProps';
import Label from '../../atoms/Label';
import InputField from '../../atoms/InputField';

/**
 * Label + input field
 */
const LabelInputField = forwardRef(
  ({
    className, id, labelContent, isInputFirst, children, ...inputProps
  }, ref) => (
    <div
      className={classNames('label-input-field', className, {
        'input-first': isInputFirst,
      })}
    >
      <Label htmlFor={id} labelContent={labelContent} />

      <InputField ref={ref} className="input-text" id={id} {...inputProps} />

      {children}
    </div>
  ),
);

LabelInputField.propTypes = {
  ...inputPropTypes,
  labelContent: PropTypes.string.isRequired,
  className: PropTypes.string,
  isInputFirst: PropTypes.bool,
};

LabelInputField.defaultProps = {
  ...inputDefaultProps,
  className: '',
  isInputFirst: false,
};

export default LabelInputField;
