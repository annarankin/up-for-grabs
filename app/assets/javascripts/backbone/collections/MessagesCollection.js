var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Collections.MessagesCollection = Backbone.Collection.extend({
  initialize: function() {
    // this.listenTo(this, 'change', this.saveModel)
  },
  comparator: 'created_at',
  url: '/api/users/messages',
  model: SwapApp.Models.MessageTitle,
  // saveModel: function(model) {
  //   model.save(model.attributes, {wait:true})
  // }
})
