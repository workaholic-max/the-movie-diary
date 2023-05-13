import React from 'react';

import { labelPropTypes } from '../../../propTypes/labelProps';

const Label = ({ labelContent, ...props }) => <label {...props}>{labelContent}</label>;

Label.propTypes = labelPropTypes;

export default Label;
