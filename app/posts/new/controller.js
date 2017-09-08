import Ember from 'ember';

const {
  Controller,
  get,
  inject: { service },
  Logger: { debug },
} = Ember;

const PostsNewController = Controller.extend({
  store: service(),
  toast: service(),
  session: service(),

  actions: {

    cancel() {
      this.transitionToRoute('posts');
    },

    saveModel(params) {
      const { title, content } = params;
      const user = get(this, 'session.currentUser');
      const model = get(this, 'store').createRecord('post', {
        title,
        content,
        user,
      });

      model.save().then(() => {
        get(this, 'toast').success('Saved!');

        this.transitionToRoute('posts.details', get(model, 'slug'));
      }, reason => {
        get(this, 'toast').error('Failed to save post');
        debug(reason);
      });
    },
  }
});

export default PostsNewController;
