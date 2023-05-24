import React, { forwardRef } from 'react';

import processEmptyProp from '../../../utils/helpers/processEmptyPropHelper';
import { inputPropTypes, inputDefaultProps } from '../../../propTypes/inputProps';

const Input = forwardRef(({
  id, value, placeholder, isInputUncontrolled, ...props
}, ref) => (
  <input
    ref={ref}
    name={id}
    id={id}
    autoComplete="off"
    {...props}
    {...processEmptyProp('value', isInputUncontrolled ? null : value)}
    {...processEmptyProp('placeholder', placeholder)}
  />
));

Input.propTypes = inputPropTypes;
Input.defaultProps = inputDefaultProps;

export default Input;
