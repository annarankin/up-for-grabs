var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Collections.MessagesCollection = Backbone.Collection.extend({
  initialize: function() {
    this.listenTo(this, 'change', this.saveModel)
  },
  url: '/api/users/messages',
  model: SwapApp.Models.MessageTitle,
  saveModel: function(model) {
    model.save()
  }
})
