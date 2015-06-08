var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Models.WishlistItem = Backbone.Model.extend({
  urlRoot: '/api/wishlists'
  })