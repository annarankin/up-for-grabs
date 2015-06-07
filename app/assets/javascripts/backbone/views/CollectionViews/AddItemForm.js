var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.AddItemFormView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  template: $('[data-template="closet-show"]').text(),
  addNewTemplate: $('[data-template="add-item"]').text(),
  events: {
    'click [data-action="add-item"]': 'newItem',
    'click [data-action="submit-new-item"]': 'submitNewItem'
  },
  newItem: function() {
    var addItemModal = $('<div>')
    addItemModal.attr('id', 'addItemModal')
    addItemModal.html( Mustache.render(this.addNewTemplate, {id: this.collection.models[0].get('closet_id')}) )
    this.$el.prepend(addItemModal)
  },
  render: function() {
    this.$el.append(Mustache.render(this.template, SwapApp.currentUser.attributes))
    console.log('Closetsss view rendering.')
  },
  submitNewItem: function(event) {
    event.preventDefault();
    var that = this
    $('#new-item-form').ajaxSubmit({
      url: '/api/items',
      type: 'POST',
      success: function(data) {
        console.log("Success!")
        that.collection.add(data)
        $('#addItemModal').remove();
      },
      error: function(data) {
        console.log("ERRORAR!")
        console.log(data)
      },
      complete: function(data) {
        console.log("AJAX form submission completed.")
      }
    })
  }
})




