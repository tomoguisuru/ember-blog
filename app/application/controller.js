import Ember from 'ember';

const {
  Controller,
  get,
  inject: { service },
} = Ember;

const ApplicationController = Controller.extend({
  drawer: service(),

  actions: {
    closeDrawer()  {
      get(this, 'drawer').closeDrawer();
    }
  }
});

export default ApplicationController;
