import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { inputPropTypes, inputDefaultProps } from '../../../propTypes/inputProps';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

/**
 * Label + input field
 */
const LabelInputField = forwardRef(
  (
    {
      className, id, labelContent, enableInputFirst, enableAnimation, children, ...inputProps
    },
    ref,
  ) => (
    <div
      className={classNames('gl-label-input-field', className, {
        'gl-label-input-field--input-first': enableInputFirst,
        'gl-label-input-field--animated': enableAnimation,
      })}
    >
      <Input ref={ref} className="gl-input-text" id={id} {...inputProps} />

      <Label htmlFor={id} labelContent={labelContent} />

      {children}
    </div>
  ),
);

LabelInputField.propTypes = {
  ...inputPropTypes,
  labelContent: PropTypes.string.isRequired,
  className: PropTypes.string,
  enableInputFirst: PropTypes.bool,
  enableAnimation: PropTypes.bool,
};

LabelInputField.defaultProps = {
  ...inputDefaultProps,
  className: '',
  enableInputFirst: false,
  enableAnimation: false,
};

export default LabelInputField;
