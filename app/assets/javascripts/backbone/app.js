var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };


// Create two app.js files, one for users and one for guests??

$(function(){
  
  //instantiating the router, which defines the currentUser function within its initialize function
  var router = new SwapApp.Routers.Router();

  //once the user's info is loaded up, start that router functioning!
  var promise = SwapApp.currentUser.fetch();
  promise.done(function() {
    Backbone.history.start();
  })

})