import {
  Model,
  belongsTo,
  hasMany
} from 'ember-cli-mirage';

const UserMirageModel = Model.extend({
  posts:    hasMany('post'),
  comments: hasMany('comment'),
});

export default UserMirageModel;
