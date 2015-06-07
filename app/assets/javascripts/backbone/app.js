var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

$(function(){
  
  //instantiating the router, which defines the currentUser function within its initialize function
  var router = new SwapApp.Routers.Router();

  //once the user's info is loaded up, start that router functioning!
  var promise = SwapApp.currentUser.fetch();
  promise.done(function() {
    Backbone.history.start();
  })

})