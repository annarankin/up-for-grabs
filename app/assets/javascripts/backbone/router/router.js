var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Routers.Router = Backbone.Router.extend({
  initialize: function (option) {
    // anything we want to happen when the page is loaded, before looking for a BB route or starting the history/whatnot. Probably a good idea to empty out dat DOM
    console.log('Router revved sufficently')
    // $("#main-content").empty();
    SwapApp.currentUser = new SwapApp.Models.User();

    
    // this.listenTo(this, 'route', function(e){console.log(e)})
  },
  routes: {
    '': 'index',
    'login' : 'login',
    'signup' : 'signup',
  },
  index: function(){
    //check if user is logged in or nawt,
    if (SwapApp.currentUser.get('id')) {
      $("#main-content").empty();    
      console.log("User " + SwapApp.currentUser.get('name') + " logged in!")
      // this.guestIndex();
      this.userProfileShow()
    } else {
      $("#main-content").empty();
      this.guestIndex();
    }
  },
  guestIndex: function(){
    console.log("Not logged in")
    //Instantiate Guest index page view
    var guestIndexView = new SwapApp.Views.GuestIndex({el: $('#main-content')})
    // Instantiate a collection of all clothing items
    var itemCollection = new SwapApp.Collections.ItemCollection()
    // Instantiate a collection view that'll pop em on the DOM
    var itemCView = new SwapApp.Views.ItemCView({collection: itemCollection, el: $('#guest-items-view')})
    // fetch that collection
    itemCollection.fetch()
  },
  userProfileShow: function(){
    // Create user model so's we can render their profile
    console.log(SwapApp.currentUser)
    // FIrst render out the paaaage (inst. view)
    var profileView = new SwapApp.Views.ProfileView({model: SwapApp.currentUser, el: $('#main-content')})
    // instantiate a view for the user's profile stuff that watches the user model? SwapApp.currentUser is a model. Yeah. Let's do that up there akshually 
  },
  login: function(){
    $("#main-content").empty();
    console.log('hit login route')
    var loginPageView = new SwapApp.Views.LoginView({el: $('#main-content')})
  },
  signup: function(){
    $("#main-content").empty();
    console.log('hit login route')
    var signupPageView = new SwapApp.Views.SignupView({el: $('#main-content')})
  }
})