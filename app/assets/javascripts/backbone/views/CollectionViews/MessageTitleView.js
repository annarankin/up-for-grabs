var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.MessageTitleView = Backbone.View.extend({
  // This view will display each individual a user has corresponded with.
  // User can click on username to display all messages exchanged with that user, listed by date.
  // This may require a new collection?

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },
  template: $('[data-template="message-title-view"]').text(),
  render: function() {
    var rendered = (Mustache.render(this.template, this.model.attributes))
    this.$el.html(rendered)
    return this
  }

})