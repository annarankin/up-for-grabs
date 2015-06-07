var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ItemView = Backbone.View.extend({
  initialize: function(){
    console.log('New ItemView is here!')
  },
  events: {
    'click .image': 'viewItem',
    'click .close-modal': 'closeModal',
    'click .delete-item': 'deleteItem'
  },
  closeModal: function() {
    $('#editItemModal').remove();
  },
  template: $('[data-template="item-card"]').html(),
  editTemplate: $('[data-template="edit-item-card"]').html(),
  render: function(){  
    this.$el.html(Mustache.render(this.template, this.model.attributes))
    this.$el.addClass('item-card pure-u-1 pure-u-md-1-2 pure-u-lg-1-4')
    return this
  },
  viewItem: function() {
    editItemModal = $('<div>')
    editItemModal.html(Mustache.render(this.editTemplate, this.model.attributes))
    editItemModal.attr('id','editItemModal')
    this.$el.prepend(editItemModal)
    // debugger
    //render a new 'ItemEditView'
    //this should contain the modal and dimmer
    //
  },
  deleteItem: function() {
    this.model.destroy();
    this.$el.remove();
  }
})