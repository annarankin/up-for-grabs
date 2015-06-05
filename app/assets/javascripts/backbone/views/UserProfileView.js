var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ProfileView = Backbone.View.extend({
  initialize: function(){
    console.log("Profyle View initialized.")
    this.render()
  },
  template: $('[data-template="user-profile"]').text(),
  render: function(){
    this.$el.append(Mustache.render(this.template, this.model.attributes))
    console.log('Profile view rendering.')
  }
})
