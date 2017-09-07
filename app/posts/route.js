import Ember from 'ember';

const {
  get,
  inject: { service },
  Route,
} = Ember;

const PostsRoute = Route.extend({
  store: service(),

  model() {
    return get(this, 'store').findAll('post');
  }
});

export default PostsRoute;
