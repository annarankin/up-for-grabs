var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ItemView = Backbone.View.extend({
  initialize: function(){
    console.log('New ItemView is here!')
  },
  events: {
    'click': 'viewItem'
  },
  template: $('[data-template="item-card"]').html(),
  render: function(){  
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    this.$el.addClass('pure-u-1 pure-u-md-1-2 pure-u-lg-1-4')
    return this
  },
  viewItem: function() {
    console.log(this.model.attributes)
  }
})