var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.SignupView = Backbone.View.extend({
  initialize: function(){
    console.log("Login View initialized.")
    this.render()
  },
  template: $('[data-template="signup-form"]').text(),
  render: function(){
    this.$el.append(this.template)
  }
})
