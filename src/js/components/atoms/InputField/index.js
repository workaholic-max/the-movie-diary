import React, { forwardRef } from 'react';

import { inputPropTypes, inputDefaultProps } from '../../../propTypes/inputProps';
import processEmptyProp from '../../../utils/helpers/processEmptyPropHelper';

const InputField = forwardRef(
  ({
    id, value, placeholder, isInputUncontrolled, oneMore, ...props
  }, ref) => (
    <input
      ref={ref}
      name={id}
      id={id}
      {...props}
      {...processEmptyProp('value', isInputUncontrolled ? null : value)}
      {...processEmptyProp('placeholder', placeholder)}
    />
  ),
);

InputField.propTypes = inputPropTypes;
InputField.defaultProps = inputDefaultProps;

export default InputField;
