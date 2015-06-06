var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.LoginView = Backbone.View.extend({
  initialize: function(){
    console.log("Login View initialized.")
    this.render()
  },
  template: $('[data-template="login-form"]').text(),
  render: function(){
    this.$el.append(this.template)
  }
})
