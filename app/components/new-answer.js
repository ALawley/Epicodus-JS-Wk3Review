import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    answerSave1() {
      var params = {
        author:this.get('author') ? this.get('author') : "",
        content:this.get('content') ? this.get('content') : "",
        question:this.get('question'),
        votes: 0
      };
      this.set('addNewAnswer', false);
      this.sendAction('answerSave2', params);
    }
  }
});
