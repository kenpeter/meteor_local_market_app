Template.nav.onRendered(function() {
  var $nav = this.$('nav');
  
  var $my_first = $nav.siblings('.content-scrollable:not(.static-nav)').children().first();

  /*
    - waypoint is the listener.
    - Basically, it says -200 down from .content-scrollable, we toggle.
  */
  $nav.siblings('.content-scrollable:not(.static-nav)').children().first().waypoint(function(direction) {
    $nav.toggleClass('scrolled', direction === 'down');
  }, {
    context: '.content-scrollable',
    offset: -200
  });
});

Template.nav.helpers({
  // Iron Router stores {initial: true} in history state if this is
  // the first route that we hit in an app. There are a variety of 
  // unexpected ways that this can happen (for example oauth, or 
  // hot code push), but we can't rely on going back in such cases.
  back: function () {
    var this_back = this.back;
    var init = history.state.initial;

    // http://stackoverflow.com/questions/22767602/in-javascript-why-does-undefined-true-return-undefined
    // Basically, true || false, only true is evaluated, never reach to false.
    // true && false, true, will be researched, then false must be researched as well.
    var the_return = this.back && ! history.state.initial;
    var the_return_1 = false && this.back ;  

    return this.back && ! history.state.initial;
  }
});
