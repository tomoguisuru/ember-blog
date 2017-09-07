import Ember from 'ember';

const {
  Controller,
  get,
  inject: { service },
  Logger: { debug },
  set,
} = Ember;

const PostDetailsController = Controller.extend({
  queryParams: ['isEditing'],

  toast: service(),

  isEditing: false,

  actions: {

    cancel(model) {
      model.rollbackAttributes();
      set(this, 'isEditing', false);
    },

    deleteModel(model) {
      model.destroyRecord().then(() => {
        get(this, 'toast').success('Deleted');
        set(this, 'isEditing', false);
        this.transitionToRoute('posts');
      }, reason => {
        get(this, 'toast').error('Delete failed');
        debug(reason);
      })
    },

    editModel() {
      set(this, 'isEditing', true);
    },

    saveModel(model) {
      const toast = get(this, 'toast');

      model.save().then(() => {
        toast.info('Saved');
        set(this, 'isEditing', false);
      }, reason => {
        toast.error('Save failed');
        debug(reason);
      });
    },
  }
});

export default PostDetailsController;
