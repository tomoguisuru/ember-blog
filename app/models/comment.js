import DS from 'ember-data';

const {
  attr,
  belongsTo,
  Model,
} = DS;

const CommentModel = Model.extend({
  description: attr('string'),

  createdAt: attr('date', { defaultValue() { return new Date(); } }),
  updatedAt: attr('date', { defaultValue() { return new Date(); } }),

  user: belongsTo('user'),
  post: belongsTo('post'),
});

export default CommentModel;
