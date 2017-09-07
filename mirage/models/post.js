import {
  Model,
  belongsTo,
  hasMany
} from 'ember-cli-mirage';

const PostMirageModel = Model.extend({
  user: belongsTo('user'),

  comments: hasMany('comment')
});

export default PostMirageModel;
