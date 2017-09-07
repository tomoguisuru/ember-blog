import { Factory, faker } from 'ember-cli-mirage';

const CommentFactory = Factory.extend({
  description: () => faker.hacker.phrase(),
});

export default CommentFactory;
