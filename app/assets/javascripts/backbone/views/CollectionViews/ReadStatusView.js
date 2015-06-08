var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ReadStatusView = Backbone.View.extend({
  initialize: function() {
    var that = this
    setInterval(function() {
      console.log('fetching from soiver')
      that.collection.fetch();
    }, 7000)

  }
})