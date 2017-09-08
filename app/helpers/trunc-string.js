import Ember from 'ember';

export function capitalizeString(params /*, hash */) {
  const str = params[0];
  const maxLength = params[1] || 10;

  if (str.length > maxLength) {
    return str.substring(0, maxLength) + '...';
  }

  return str;
}

export default Ember.Helper.helper(capitalizeString);
