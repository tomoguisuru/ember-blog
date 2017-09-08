import Ember from 'ember';

const {
  Service,
  set,
} = Ember;

const DrawerService = Service.extend({

  isActive: false,

  toggleDrawer() {
    this.toggleProperty('isActive');
  },

  openDrawer() {
    set(this, 'isActive', true);
  },

  closeDrawer() {
    set(this, 'isActive', false);
  },
});

export default DrawerService;
