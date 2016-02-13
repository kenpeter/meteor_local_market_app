/* Does it mean it is the controller? */
Template.recipeItem.helpers({
  path: function () {
    return Router.path('recipe', this.recipe);
  },
  
  highlightedClass: function () {
    if (this.size === 'large')
      return 'highlighted';
  },
  
  bookmarkCount: function () {
    // this is the actual data
    var count = BookmarkCounts.findOne({recipeName: this.name});
    return count && count.count;
  }
});
