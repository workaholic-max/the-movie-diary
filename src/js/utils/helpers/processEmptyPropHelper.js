/**
 * Check prop value (if is empty [null])
 * return object empty (if value === null) or format [key]: value
 *
 * @param key {String}
 * @param value {String}
 *
 * @return {Object}
 */
const processEmptyProp = (key, value) => (value !== null ? { [key]: value } : {});

export default processEmptyProp;
