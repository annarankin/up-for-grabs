var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.ReadStatusView = Backbone.View.extend({
  initialize: function(options) {
    var that = this
    // Checking the server for new messages every 7 seconds
    setInterval(function() {
      console.log('fetching from soiver')
      that.collection.fetch()//.done(function(data) {
      //   console.log(data)
      // });
    }, 7000)
    //listening for new additions, telling it to check for newness 
    this.listenTo(this.collection, 'add', this.checkForNewMessages)
    //listening for the custom newMessage event, triggered when the newMessages option is changed from true to false
    this.listenTo(SwapApp.event_bus, 'newMessage', this.announce)
  },
  checkForNewMessages: function(model) {
    // checking to see if model's 'read status' is true or false and if the newMessage status for the whole view is already true
    if (!model.attributes.read_status && SwapApp.newMessages === false && model.attributes.id != SwapApp.currentUser.get('id')) {
      console.log('Unread message!')
      SwapApp.newMessages = true
      // use the global 'event bus' to trigger a global 'newMessage' event, which other views can listen for
      SwapApp.event_bus.trigger('newMessage')
    }
  },
  announce: function() {
    console.log("SUMMAT CHANGED")
    // change inbox thing to display that new messages are heer
    $('#inbox-link').html("Inbawks <i class='fa fa-envelope'></i>")
    // 
  }
})