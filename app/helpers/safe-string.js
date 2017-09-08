import Ember from 'ember';

const {
  Helper,
  Handlebars: { SafeString },
} = Ember;

export function safeString(params /*, hash */) {
  let str = params[0];

  if (str && str.length) {
    str = str.trim().split(/\n/).map(e => `<p>${e}</p>`).join('');
    return new SafeString(str);
  }

  return str;
}

export default Helper.helper(safeString);
