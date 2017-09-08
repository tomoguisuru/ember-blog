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
      get(this, 'drawer').clearSlug();
      this.transitionToRoute('posts.new');
    },

    showMenu() {
      get(this, 'drawer').openDrawer();
    },

    showPost(slug) {
      get(this, 'drawer').setSlug(slug);
      this.transitionToRoute('posts.details', slug);
    }
  }
});

export default PostsController;
