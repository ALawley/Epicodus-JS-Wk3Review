import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  votes: DS.attr(),
  answers: DS.belongsTo('question', {async: true})
});
