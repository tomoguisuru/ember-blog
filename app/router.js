import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL:  config.rootURL
});

Router.map(function() {
  this.route('posts', { path: '/' }, function() {
    this.route('details', { path: '/:slug' });
  });
});

export default Router;
