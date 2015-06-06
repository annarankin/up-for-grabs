var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.MenuView = Backbone.View.extend({
  initialize: function(){
    console.log("Menu View initialized.")
    this.render()
  },
  template: $('[data-template="menu-template"]').text(),
  render: function(){
    this.$el.append(Mustache.render(this.template, this.model.attributes))
    console.log('Menu view rendering.')
  }
})
