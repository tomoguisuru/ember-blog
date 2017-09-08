import Ember from 'ember';

const {
  Service,
  set,
} = Ember;

const SessionService = Service.extend({

  currentUser: null,

  setCurrentUser(user) {
    set(this, 'currentUser', user);
  },
});

export default SessionService;
