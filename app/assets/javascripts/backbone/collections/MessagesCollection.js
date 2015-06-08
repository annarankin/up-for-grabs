var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Collections.MessagesCollection = Backbone.Collection.extend({
  url: '/api/users/messages',
  model: SwapApp.Models.MessageTitle
})
