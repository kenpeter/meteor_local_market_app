var FEATURED_COUNT = 5; // Change from 4 to 5, to see what happen

Template.home.helpers({
  // selects FEATURED_COUNT number of recipes at random
  featuredRecipes: function() {
    /*
      RecipesData is from lib/recipes-data.js

      recipes === array of object, but removing the key
      RecipesData === big fat object 
    */
    var recipes = _.values(RecipesData);
    var selection = [];
    
    for (var i = 0;i < FEATURED_COUNT;i++) {
      var my_num = recipes.length - 1; // e.g. 27
      var my_rand = _.random(my_num); // e.g. 1-27 may be 6
      // my_rand === 6, so it starts in 6, then 1 means remove 1 element.
      var my_splice = recipes.splice(my_rand, 1);
      selection.push(my_splice[0]); // push

    }

    return selection;
  },
  
  activities: function() {
    return Activities.latest();
  },
  
  latestNews: function() {
    return News.latest();
  }
});
