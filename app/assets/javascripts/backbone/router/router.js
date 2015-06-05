var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };


SwapApp.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    // anything we want to happen when the page is loaded, before looking for a BB route or starting the history/whatnot. Probably a good idea to empty out dat DOM
    console.log('Router revved sufficently')
    $("#main-content").empty();
  },
  routes: {
    '': 'index'
  },
  index: function(){
    console.log('hi this is the index route!!!')
    //indexy things
      //Instantiate a view that is concerned with the guest-index page in its entirety (sp??)
      var guestIndexView = new SwapApp.Views.GuestIndex({el: $('#main-content')})
      var itemCollection = new SwapApp.Collections.ItemCollection()
      var itemCView = new SwapApp.Views.ItemCView({collection: itemCollection, el: $('#guest-items-view')})
      itemCollection.fetch()
      // Instantiate a collection of items
      // Instantiate a collection view that'll pop em on the DOM
      // fetch that collection
  }
})