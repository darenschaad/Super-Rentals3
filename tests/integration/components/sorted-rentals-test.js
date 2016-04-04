import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sorted-rentals', 'Integration | Component | sorted rentals', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sorted-rentals}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sorted-rentals}}
      template block text
    {{/sorted-rentals}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
