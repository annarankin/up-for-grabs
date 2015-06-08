var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

// Way too much going on in this view, should break it up later

SwapApp.Views.ItemView = Backbone.View.extend({
  initialize: function(){
    console.log('New ItemView is here!')
    this.listenTo(this.model, 'change', this.render)
  },
  events: {
    'click [data-action="edit"]': 'editItemView',
    'click .close-modal': 'closeModal',
    'click .delete-item': 'deleteItem',
    'click [data-action="edit-item-save"]' : 'saveEdit',
    'click [data-action="favorite-item"]' : 'toggleFavorite'
  },
  closeModal: function() {
    $('#editItemModal').remove();
  },
  template: $('[data-template="user-item-card"]').html(),
  guestTemplate: $('[data-template="item-card"]').html(),
  editTemplate: $('[data-template="edit-item-card"]').html(),
  render: function(){
    // debugger
    if (SwapApp.currentUser && SwapApp.currentUser.get('id') == this.model.attributes.user.id) {

      this.$el.html(Mustache.render(this.template, this.model.attributes))
      this.$el.attr('class','item-card pure-u-1 pure-u-md-1-2 pure-u-lg-1-4')
      // if is a favorite, toggle class to true, else false
      return this
    } else {
      var $modelView = this.$el
      this.$el.html(Mustache.render(this.guestTemplate, this.model.attributes))
      this.$el.attr('class','item-card pure-u-1 pure-u-md-1-2 pure-u-lg-1-4')
      // debugger
      if (_.findWhere(this.model.attributes.favorite_users, {id: SwapApp.currentUser.get('id')})) {
          $modelView.addClass('favorite')
      }
      return this
    }
  },
  editItemView: function() {
    editItemModal = $('<div>')
    editItemModal.html(Mustache.render(this.editTemplate, this.model.attributes))
    editItemModal.attr('id','editItemModal')
    this.$el.prepend(editItemModal)
  },
  deleteItem: function() {
    // Put in something a little more elegant later...
    if (confirm('Delete this item forever?')) {
      this.model.destroy();
      this.$el.remove();
    }
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
  },
  toggleFavorite: function(event) {
    var that = this
    var userWishlist = (_.findWhere(
      this.model.attributes.wishlists, {
        item_id: this.model.attributes.id,
        user_id: SwapApp.currentUser.get('id')
      })
    )
    if (userWishlist) {
      that.$el.removeClass('favorite') 
      $.ajax({
        url: '/api/users/wishlists/'+ userWishlist.id,  
        type: "DELETE",
        success: function(data) {
          that.model.fetch()
        },
        error: function(data) {
        }
      })
    } else {
      that.$el.addClass('favorite')
      console.log("Adding favorite!")
      data = { id: this.model.get('id') }
      $.ajax({
        url: '/api/users/wishlists',
        type: "POST",
        data: data,
        success: function(data) {
          console.log('Post werked.')
          that.model.fetch()
        },
        error: function(data) {
          console.log('Post failed. Model not updooted.')
        }
      })
    }
  }
})