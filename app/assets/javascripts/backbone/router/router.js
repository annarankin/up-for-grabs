var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Routers.Router = Backbone.Router.extend({
  initialize: function (option) {
    // anything we want to happen when the page is loaded, before looking for a BB route or starting the history/whatnot. Probably a good idea to empty out dat DOM
    console.log('Router revved sufficently')
    // $("#main-content").empty();
    SwapApp.currentUser = new SwapApp.Models.User();
    // Setting up a globalish collection of all user messages and a view to keep on checking if there are new ones.
    SwapApp.userMessageCollection = new SwapApp.Collections.MessagesCollection()
    SwapApp.readStatusView = new SwapApp.Views.ReadStatusView({collection: SwapApp.userMessageCollection})
    
    // this.listenTo(this, 'route', function(e){console.log(e)})
  },
  routes: {
    '': 'index',
    'login' : 'login',
    'signup' : 'signup',
    'closets' : 'allClosets',
    'user/closets' : 'userClosets',
    'closets/:id' : 'showCloset',
    'items' : 'items',
    'wishlist' : 'wishlist',
    'inbox': 'inbox'
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
    var itemCollection = new SwapApp.Collections.ItemCollection({url: '/api/items'})

    var filteredCollection = new SwapApp.Collections.ItemCollection({url: '/api/items'})

    // Instantiate a collection view that'll pop em on the DOM
    var searchResultsView = new SwapApp.Views.ItemSearchView({collection: filteredCollection, el: $('#guest-items-view'), baseCollection: itemCollection})

    itemCollection.fetch().done(function(data) {
      filteredCollection.reset(data)
    })
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
    var userClosets = new SwapApp.Collections.ClosetCollection({url: '/api/users/closets'})
    var closetsView = new SwapApp.Views.UserClosetsView({collection: userClosets, el: $('#user-content')})
  },
  allClosets: function() {
    console.log('all closets route hit')
  },
  showCloset: function(id) {
    
    $("#main-content").empty();
    
    var menuView = new SwapApp.Views.MenuView({model: SwapApp.currentUser, el: $('#main-content')})
    // $('#user-content').html($('[data-template="show-closet"]').text())
    var itemsCollection = new SwapApp.Collections.ClosetItems()
    var addItemFormView = new SwapApp.Views.AddItemFormView({collection: itemsCollection, el: $('#user-content')})

    var itemsCView = new SwapApp.Views.ItemCView({collection: itemsCollection, el: $('#user-content') })
  },
  items: function() {
    $("#main-content").empty();
    var menuView = new SwapApp.Views.MenuView({model: SwapApp.currentUser, el: $('#main-content')})
    // instantiating a collection that'll hold all of our models
    var itemCollection = new SwapApp.Collections.ItemCollection({url: '/api/users/wishlists'})
    // instantiating a collection that will hold our filtered results
    var filteredCollection = new SwapApp.Collections.ItemCollection({url: '/api/users/wishlists'})
    // instantiating a search results view - it listens for "reset" events spit out by filteredCollection, then re-renders itself with the new contents!
    var searchResultsView = new SwapApp.Views.ItemSearchView({collection: filteredCollection, el: $('#user-content'), baseCollection: itemCollection}
        )
    //populating search results with ALL THE THINGS
    itemCollection.fetch().done(function(data) {
      filteredCollection.reset(data)
    })
  },
  wishlist: function() {
    // Consider bundling the empty/menu render functions
    $("#main-content").empty();
    var menuView = new SwapApp.Views.MenuView({model: SwapApp.currentUser, el: $('#main-content')})

    var wishlistItemsCollection = new SwapApp.Collections.WishlistItems()
    var wishlistItemsView = new SwapApp.Views.WishlistItemsView({ collection: wishlistItemsCollection, el: $('#user-content')})
  },
  inbox: function() {
    $("#main-content").empty();
    // var menuView = new SwapApp.Views.MenuView({model: SwapApp.currentUser, el: $('#main-content')})

    // // get all messages
    // var messagesCollection = new SwapApp.Collections.MessagesCollection()
    // var inboxView = new SwapApp.Views.InboxView({collection: messagesCollection, el: $('#user-content')})
    // // pluck out the names


    $("#main-content").empty();
    var menuView = new SwapApp.Views.MenuView({model: SwapApp.currentUser, el: $('#main-content')})
   
    // instantiating a collection that will hold our filtered results
    var filteredMessageCollection = new SwapApp.Collections.MessagesCollection()
    var inboxView = new SwapApp.Views.InboxView({collection: filteredMessageCollection, el: $('#user-content'), baseCollection: SwapApp.userMessageCollection}
        )




  }
})









