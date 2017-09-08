import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-details', 'Integration | Component | post details', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {
    title: 'Test Me',
    content: 'This is amazing',
  });

  this.render(hbs`{{post-details post=model}}`);

  assert.equal(this.$('#post-title').val().trim(), 'Test Me');
  assert.equal(this.$('#post-content').val().trim(), 'This is amazing');

});
