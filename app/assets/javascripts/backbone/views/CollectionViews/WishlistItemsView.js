var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.WishlistItemsView = Backbone.View.extend({
  initialize: function() {
    console.log("Wishlist items view initialized!")
    this.renderHeader()
    this.collection.fetch()
    this.listenTo(this.collection, 'add', this.render)
  },
  template: $('[data-template="wishlist-show"]').text(),
  renderHeader: function() {
    this.$el.html(this.template)
  },
  render: function(model) {
    var newWishlistItem = new SwapApp.Views.WishlistItemView({model: model})
    newWishlistItem.render()
    this.$el.append(newWishlistItem.$el)    
  }
})