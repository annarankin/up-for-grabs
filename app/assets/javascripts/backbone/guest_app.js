var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };


$(function(){
  //instantiating the router, which defines the currentUser function within its initialize function
  SwapApp.currentUser = false
  var router = new SwapApp.Routers.Router();
  //once the user's info is loaded up, start that router functioning!
    Backbone.history.start();
})