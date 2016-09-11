import Ember from 'ember';

var questions = [{
  id:1,
  author: "mike",
  post:"whre can i learn how to sail?",
}, {

  id:2,
  author: "John",
  post: "where can i find good pizza in seattle?",
}];
export default Ember.Route.extend({
  model() {
    return questions;
  },
});
