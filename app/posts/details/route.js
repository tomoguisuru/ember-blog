import Ember from 'ember';

const {
  get,
  inject: { service },
  Route,
} = Ember;

const PostsRoute = Route.extend({
  store: service(),

  model(params) {
    return get(this, 'store').findRecord('post', params.id);
  }
});

export default PostsRoute;
