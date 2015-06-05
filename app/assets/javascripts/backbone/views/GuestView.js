var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.GuestIndex = Backbone.View.extend({
  initialize: function(){
    console.log("Initialized!!")
    this.render()
  },
  template: $('[data-template="guest-index"]').text(),
  render: function(){
    this.$el.append(this.template)
  }
})