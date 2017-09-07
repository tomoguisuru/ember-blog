import DS from 'ember-data';

const {
  attr,
  hasMany,
  Model,
} = DS;

const UserModel = Model.extend({
  firstName: attr('string'),
  lastName:  attr('string'),
  userName:  attr('string'),
  avatar:    attr('string'),
  password:  attr('string'),

  comments: hasMany('comment'),
  posts:    hasMany('post'),
});

export default UserModel;
