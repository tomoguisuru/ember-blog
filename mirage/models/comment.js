import {
  Model,
  belongsTo,
  hasMany
} from 'ember-cli-mirage';

const CommentMirageModel = Model.extend({
  user: belongsTo('user'),

  post: hasMany('post')
});

export default CommentMirageModel;
