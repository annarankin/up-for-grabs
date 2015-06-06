var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Models.Closet = Backbone.Model.extend({
  urlRoot: '/api/closets'
})