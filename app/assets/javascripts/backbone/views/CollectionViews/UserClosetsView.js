var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.UserClosetsView = Backbone.View.extend({
  initialize: function(){
    console.log("User closets view initialized.")
    this.listenTo(this.collection, 'add', this.addCloset)
    this.collection.fetch()
  },
  events: {
    'click [data-action="add-closet"]' : 'addCloset'
  },
  template: $('[data-template="user-closets"]').text(),
  render: function(){
    this.$el.append(Mustache.render(this.template, SwapApp.currentUser.attributes))
    console.log('Closetsss view rendering.')
  },
  addCloset: function(model) {
    var newCloset = new SwapApp.Views.ClosetView({model: model})
    newCloset.render();
    this.$el.append(newCloset.$el)
  }
})
