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
    'closets' : 'allClosets',
    'user/closets' : 'userClosets',
    'closets/:id' : 'showCloset'
  },
  index: function(){
    //check if user is logged in or nawt,
    if (SwapApp.currentUser.get('id')) {
      $("#main-content").empty();    
      console.log("User " + SwapApp.currentUser.get('name') + " logged in!")
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
    var menuView = new SwapApp.Views.MenuView({model: SwapApp.currentUser, el: $('#main-content')})
    var profileView = new SwapApp.Views.ProfileView({model: SwapApp.currentUser, el: $('#user-content')})
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
  },
  userClosets: function() {
    $("#main-content").empty();
    console.log('user closet route hit')
    var menuView = new SwapApp.Views.MenuView({model: SwapApp.currentUser, el: $('#main-content')})
    var closetsView = new SwapApp.Views.UserClosetsView({model: SwapApp.currentUser, el: $('#user-content')})
  },
  allClosets: function() {
    console.log('all closets route hit')
  },
  showCloset: function() {
    console.log('single closet route hit')
  },
})