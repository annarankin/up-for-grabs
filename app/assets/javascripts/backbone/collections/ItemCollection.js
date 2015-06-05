var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Collections.ItemCollection = Backbone.Collection.extend({
  model: SwapApp.Models.Item,
  url: '/api/items',
  initialize: function() {
    console.log("Mmhmm yup item collection dao le dui ba")
  }
})