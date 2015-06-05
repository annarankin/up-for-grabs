var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

// SwapApp.initialize = function(){
//   //Probably nothing here!!!
// }

$(function(){
  var router = new SwapApp.Routers.Router();
  Backbone.history.start();
})