var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Models.Item = Backbone.Model.extend({
  urlRoot: '/api/items'
  })