import Ember from 'ember';

import DS from 'ember-data';

const {
  computed,
} = Ember;

const {
  attr,
  hasMany,
  Model,
} = DS;

const UserModel = Model.extend({
  firstName: attr('string'),
  lastName:  attr('string'),
  userName:  attr('string'),
  email:     attr('string'),
  avatar:    attr('string'),
  password:  attr('string'),

  comments: hasMany('comment'),
  posts:    hasMany('post'),

  fullName: computed('firstName', 'lastName', function() {
    const { firstName, lastName } = this.getProperties('firstName', 'lastName');

    return `${firstName} ${lastName}`;
  }),
});

export default UserModel;
