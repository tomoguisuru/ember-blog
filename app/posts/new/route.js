import Ember from 'ember';

const {
  Route,
} = Ember;

const PostsRoute = Route.extend({

  model() {
    return {
      title: '',
      content: '',
    };
  }
});

export default PostsRoute;
