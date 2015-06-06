var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ProfileView = Backbone.View.extend({
  initialize: function(){
    console.log("Profyle View initialized.")
    this.listenTo(this.model, 'change', this.render)
    this.render()
  },
  events: {
    'click [data-action="edit-profile"]': 'editProfile',
    'click [data-action="save-profile"]': 'saveProfile'
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
    console.log('saved!')

    var formParams = {}
    formParams.name = $("#name").val()
    formParams.email = $("#email").val()
    formParams.location = $("#location").val()
    formParams.about_me = $("#about_me").val()

    //Having issues with file uploading...

    // newAvatar = $("#avatar").prop('files')[0]
    // if (newAvatar) {
    //   var formData = new FormData()
    //   formData.append('user["avatar"]', newAvatar)
    //   // debugger
    //   var that = this
    //   $.ajax({
    //       url: '/api/users',
    //       method: 'PUT',
    //       processData: false,
    //       contentType: false,
    //       data: formData,
    //       error: function (data) {
    //         console.log('error\'d')
    //         // debugger
    //       },
    //       success: function (data) {
    //         console.log('success\'d')
    //         // debugger
    //       }
    //   }).done(function(data){
    //     // debugger
    //     console.log(data)
    //   });
    // }
    this.model.save(formParams, {wait: true})
    
  }
})
