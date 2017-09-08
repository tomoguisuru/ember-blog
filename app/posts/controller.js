import Ember from 'ember';

const {
  Controller,
  get,
  inject: { service },
} = Ember;

const PostsController = Controller.extend({
  drawer: service(),


  actions: {
    closeMenu() {
      get(this, 'drawer').closeDrawer();
    },

    newPost() {
      this.transitionToRoute('posts.new');
    },

    showMenu() {
      get(this, 'drawer').openDrawer();
    },
  }
});

export default PostsController;
