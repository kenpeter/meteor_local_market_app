Template.activity.onRendered(function() {
  var self = this;

  // If the activity is in a list, scroll it into view. Note, we can't just use
  // element.scrollIntoView() because it attempts to scroll in the X direction
  // messing up our animations

  var my_params = Router.current().params;

  if (Router.current().params.activityId === self.data._id) {
    var $activity = $(self.firstNode);
    var top = $activity.offset().top;
    var $parent = $(self.firstNode).closest('.content-scrollable');
    var parentTop = $parent.offset().top;
    $parent.scrollTop(top - parentTop);
  }
});

Template.activity.helpers({
  firstName: function() {

    // Some data coming from db, or we set it

    var my_user_name = this.userName.split(' ')[0];

    return this.userName.split(' ')[0];
  },

  recipeTitle: function() {
    // RecipesData is from lib/recipes-data.js
    
    var my_title = RecipesData[this.recipeName].title;

    return RecipesData[this.recipeName].title;
  },

  path: function() {

    var my_recipe_name = this.recipeName;

    var my_id = this._id;

    return Router.path('recipe', { name: this.recipeName },
      { query: { activityId: this._id } })
  }
})
