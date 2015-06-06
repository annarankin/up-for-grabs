var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Collections.ClosetCollection = Backbone.Collection.extend({
  url: '/api/users/closets',
  model: SwapApp.Models.Closet,
  initialize: function() {
    console.log('Closet Collection initialized!!')
  }
})