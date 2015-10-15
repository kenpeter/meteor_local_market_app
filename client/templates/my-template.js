// Here you bookmark stuff
Template.myTemplate.events({
  'click .js-my-template-log': function(event) {
    event.preventDefault();

    console.log('click .js-my-template-log');
  }
});
