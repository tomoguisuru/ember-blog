import Ember from 'ember';

const {
  get,
  inject: { service },
  Route,
} = Ember;

const PostsRoute = Route.extend({
  store: service(),

  model(params) {
    return get(this, 'store').peekAll('post').find(p => get(p, 'slug') === params.slug);
  }
});

export default PostsRoute;
