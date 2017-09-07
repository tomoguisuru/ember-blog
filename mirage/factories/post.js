import { Factory, faker } from 'ember-cli-mirage';

const PostFactory = Factory.extend({
  title: () => faker.lorem.words(2),
  content: () => faker.lorem.paragraphs(10),
});

export default PostFactory;
