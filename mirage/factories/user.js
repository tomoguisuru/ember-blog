import { Factory, faker } from 'ember-cli-mirage';

const PostFactory = Factory.extend({
  firstName: () => faker.name.firstName(),
  lastName:  () => faker.name.lastName(),
  userName:  () => faker.internet.userName(),
  avatar:    () => faker.image.avatar(),
  password:  () => faker.internet.password(),
});

export default PostFactory;
