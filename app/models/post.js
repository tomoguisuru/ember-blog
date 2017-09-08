import Ember from 'ember';
import DS from 'ember-data';

const {
  computed,
  get,
  isEmpty,
} = Ember;

const {
  attr,
  belongsTo,
  hasMany,
  Model,
} = DS;

const PostModel = Model.extend({
  title:   attr('string'),
  content: attr('string'),
  //slug:    attr('string'),

  createdAt: attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: attr('date', { defaultValue() { return new Date(); } }),

  user: belongsTo('user'),

  comments: hasMany('comment'),

  slug: computed('title', function() {
    const title = get(this, 'title');

    if (isEmpty(title)) { return; }

    const replaceAll = (string, term, replacement) => {
      return string.replace(new RegExp(term, 'g'), replacement);
    };

    return replaceAll(title, /(\s+|_|\?|!|@|#|\$|%|\^|&|\*|\(|\))/, '-');
  }),

});

export default PostModel;
