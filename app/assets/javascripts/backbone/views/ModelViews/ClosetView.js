var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ClosetView = Backbone.View.extend({
  template: '<a href="/#closets/{{id}}">{{name}}</a>',
  render: function(){  
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    return this
  }
})