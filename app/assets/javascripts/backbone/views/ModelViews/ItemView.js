var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ItemView = Backbone.View.extend({
  initialize: function(){
    console.log('New ItemView is here!')
    this.listenTo(this.model, 'change', this.render)
  },
  events: {
    'click [data-action="edit"]': 'editItemView',
    'click .close-modal': 'closeModal',
    'click .delete-item': 'deleteItem',
    'click [data-action="edit-item-save"]' : 'saveEdit'
  },
  closeModal: function() {
    $('#editItemModal').remove();
  },
  template: $('[data-template="user-item-card"]').html(),
  guestTemplate: $('[data-template="item-card"]').html(),
  editTemplate: $('[data-template="edit-item-card"]').html(),
  render: function(){
    debugger
    // if (SwapApp.currentUser.attributes.id != undefined && SwapApp.currentUser.get('id') == this.model.attributes.user.id) {
      this.$el.html(Mustache.render(this.template, this.model.attributes))
      this.$el.attr('class','item-card pure-u-1 pure-u-md-1-2 pure-u-lg-1-4')
      return this
    // } else {
      // this.$el.html(Mustache.render(this.guestTemplate, this.model.attributes))
      // this.$el.attr('class','item-card pure-u-1 pure-u-md-1-2 pure-u-lg-1-4')
      // return this
    // }
  },
  editItemView: function() {
    editItemModal = $('<div>')
    editItemModal.html(Mustache.render(this.editTemplate, this.model.attributes))
    editItemModal.attr('id','editItemModal')
    this.$el.prepend(editItemModal)
  },
  deleteItem: function() {
    this.model.destroy();
    this.$el.remove();
  },
  saveEdit: function(event) {
    event.preventDefault();
    var that = this
    console.log("SHAVING???")

    $('#edit-item-form').ajaxSubmit({
      url: '/api/items/' + that.model.get('id'),
      type: 'PUT',
      success: function(data) {
        console.log("Success!")
        that.model.fetch();
        that.closeModal();
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