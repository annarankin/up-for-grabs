var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ClosetView = Backbone.View.extend({
  template: '{{name}}: <a href="/#closets/{{id}}">{{items.length}} items</a>',
  render: function(){  
    renderObj = this.model.attributes
    this.$el.html(Mustache.render(this.template, renderObj))
    return this
  }
})