var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ItemView = Backbone.View.extend({
  initialize: function(){
    console.log('New ItemView is here!')
    console.log(this.template)
  },
  template: $('[data-template="item-card"]').html(),
  render: function(){  
  }
})