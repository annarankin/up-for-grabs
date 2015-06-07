var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ProfileView = Backbone.View.extend({
  initialize: function(){
    console.log("Profyle View initialized.")
    this.listenTo(this.model, 'change', this.render)
    this.render()
  },
  events: {
    'click [data-action="edit-profile"]': 'editProfile',
    'click [data-action="save-profile"]': 'saveProfile',
    'click [data-action="cancel-profile-edit"]': 'cancelEdit'
  },
  template: $('[data-template="user-profile"]').text(),
  editTemplate: $('[data-template="user-profile-edit"]').text(),
  render: function(){
    this.$el.empty();
    this.$el.append(Mustache.render(this.template, this.model.attributes))
    console.log('Profile view rendering.')
  },
  editProfile: function(event) {
    event.preventDefault();
    this.$el.empty()
    this.$el.append(Mustache.render(this.editTemplate, this.model.attributes))
  },
  saveProfile: function(event){
    event.preventDefault();
    var that = this
// jQuery form plugin method - submits edit profile form ASYNCHRONOUSLY OYESSS
    $('#edit-profile-form').ajaxSubmit({
      url: '/api/users',
      type: 'PUT',
      success: function(data) {
        console.log("Success!")
        // console.log(data)
        that.model.fetch();
        // debugger
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
  cancelEdit: function(event) {
    event.preventDefault();
    this.render();
  }
})
