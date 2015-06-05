var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users"
})