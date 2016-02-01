/**
 * Render an error produced by eslint as an stacktrace
 * @param  {Array} errors List of errors produced
 * @return {String}       Stacktrace produced by the errors.
 */
module.exports = function renderErrors(errors) {
  if (!errors) {
    return '';
  }

  return errors.map(function(error) {
    return error.line + ':' + error.column + ' ' +
      ' - ' + error.message + ' (' + error.ruleId +')';
  }).join('\n');
}
