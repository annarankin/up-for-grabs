var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.MessageView = Backbone.View.extend({
  initialize: function() {
    // console.log("New message view lives and breathes")
  },
  tagName: "tr",
  template: $('[data-template="message-content-view"]').text(),
  render: function() {
    // console.log("Message view for " + this.model.get('message') + " rendering.")
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    return this
  }
})

