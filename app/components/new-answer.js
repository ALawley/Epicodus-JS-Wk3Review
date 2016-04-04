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
        text:this.get('text') ? this.get('text') : "",
        question:this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('answerSave2', params);
    }
  }
});
