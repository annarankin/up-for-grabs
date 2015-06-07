var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ItemSearchView = Backbone.View.extend({
  initialize: function(options){
    this.options = options
    console.log('Search view initialized')
    this.listenTo(this.collection, 'reset', this.render, this)
    this.renderForm();
    // this.collection.fetch();
  },
  events: {
    'input #search-form': 'filterCollection'
  },
  template: $('[data-template="search-form"]').text(),
  render: function() {
    var html = []
    this.collection.each(function(model){
      var newItemView = new SwapApp.Views.ItemView({model: model});
      newItemView.render();
      html.push(newItemView.$el)
    })
    $("[id='search-results']").empty()
    $("[id='search-results']").append(html)
  },
  renderForm: function() {
    this.$el.html(this.template)
  },
  filterCollection: function(event) {
    console.log(event)
    var filter = {}
    filter.clothing_type= $('#clothing_type').val().toLowerCase()
    filter.color = $('#color').val().toLowerCase()
    filter.size = $('#size').val().toLowerCase()
    filteredData = this.options.baseCollection.filter(function(object) {
      filtered = (
        object.get('clothing_type').toLowerCase().includes(filter.clothing_type) &&
        object.get('color').toLowerCase().includes(filter.color) && 
        object.get('size').toLowerCase().includes(filter.size)
       )
      return filtered
    })
    this.collection.reset(filteredData)
  },
})