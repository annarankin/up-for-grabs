var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.UserClosetsView = Backbone.View.extend({
  initialize: function(){
    console.log("User closets view initialized.")
    this.render()
  },
  template: $('[data-template="user-closets"]').text(),
  render: function(){
    this.$el.append(Mustache.render(this.template, this.model.attributes))
    console.log('Closetsss view rendering.')
  }
})
