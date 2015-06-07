var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ItemCView = Backbone.View.extend({
  initialize: function(){
    console.log('Item collection view lai le oh')
    this.listenTo(this.collection, 'add', this.addOne)
    // this.render();
    this.collection.fetch();
  },
  template: $('[data-template="closet-show"]').text(),
  addOne: function(model){
    var newItemView = new SwapApp.Views.ItemView({model: model});
    newItemView.render();
    this.$el.append(newItemView.$el)
  }
})