var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.MenuView = Backbone.View.extend({
  initialize: function(){
    console.log("Menu View initialized.")
    this.render()
    // listening to globalish event trigger-er for a newMessage event
    this.listenTo(SwapApp.event_bus, 'newMessage', this.newMessage)
  },
  template: $('[data-template="menu-template"]').text(),
  render: function(){
    this.$el.append(Mustache.render(this.template, this.model.attributes))
    if (SwapApp.newMessages) {
      $('#inbox-link').html("Inbawks <i class='fa fa-envelope'></i>")
    }
    console.log('Menu view rendering.')
  },
  newMessage: function(event) {
    $('#inbox-link').html("Inbawks <i class='fa fa-envelope'></i>")
  }
})
