var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Collections.WishlistItems = Backbone.Collection.extend({
  model: SwapApp.Models.WishlistItem,
  url: '/api/users/wishlists',
  initialize: function() {
    console.log("Wishlist collection initialized.")
  }
})