import Ember from 'ember';

const {
  get,
  inject: { service },
  Route,
} = Ember;

const PostsRoute = Route.extend({
  store: service(),
  drawer: service(),

  model(params) {
    get(this, 'drawer').setSlug(params.slug);
    return get(this, 'store').peekAll('post').find(p => get(p, 'slug') === params.slug);
  }
});

export default PostsRoute;
