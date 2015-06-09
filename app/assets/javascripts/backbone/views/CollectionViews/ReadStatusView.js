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
    this.listenTo(this.collection, 'add', this.checkForNewMessage)
    //listening for the custom newMessage event, triggered when the newMessages option is changed from true to false
    this.listenTo(SwapApp.event_bus, 'newMessage', this.changeInboxNew)
    this.listenTo(SwapApp.event_bus, 'allRead', this.changeInboxRead)
    this.listenTo(SwapApp.event_bus, 'doneFiltering', this.checkForNewMessages)
    this.listenTo(SwapApp.event_bus, 'doneFiltering', this.saveAllMessagesInFilter)
    // this.listenTo(SwapApp.event_bus, 'allRead', this.saveAllMessagesInFilter)

  },
  checkForNewMessage: function(model) {
    // checking to see if model's 'read status' is true or false and if the newMessage status for the whole view is already true
    var rejectUserMessages = _.isMatch(model.attributes, {sender_id: SwapApp.currentUser.get('id')})
    var newMessage = _.isMatch(model.attributes, {read_status: false})
    console.log("New message: " + newMessage)
    if (newMessage && !rejectUserMessages) {
      console.log('Unread message!')
      SwapApp.newMessages = true
      // use the global 'event bus' to trigger a global 'newMessage' event, which other views can listen for
      SwapApp.event_bus.trigger('newMessage', newMessage)
    } 
  },
  checkForNewMessages: function() {
    var newMessage = this.collection.findWhere({read_status: false})
    if (newMessage){
      var rejectUserMessages = _.isMatch(newMessage.attributes, {sender_id: SwapApp.currentUser.get('id')})
    }
      // debugger
    console.log("New message: " + newMessage)
    if (newMessage && !rejectUserMessages) {
      console.log('Unread message!')
      SwapApp.newMessages = true
      SwapApp.event_bus.trigger('newMessage', newMessage)
    } else {
      console.log('No new messages found.')
      SwapApp.newMessages = false
      SwapApp.event_bus.trigger('allRead')
    }
  },
  changeInboxNew: function() {
    // console.log("SUMMAT CHANGED")
    // change inbox thing to display that new messages are heer
    $('#inbox-link').html("Inbawks <i class='fa fa-envelope'></i>")
    // 
  },
  changeInboxRead: function() {
    // console.log("SUMMAT CHANGED")
    // change inbox thing to display that new messages are heer
    $('#inbox-link').html("Inbawks")
    // 
  },
  saveAllMessagesInFilter: function() {
    console.log('Read status view heard a "doneFiltering" event, saving all models.')
    var that = this

    // setting read status of all messages in this collection to 'read'
    SwapApp.filteredMessageCollection.each(function(el) {
      if (el.attributes.read_status === false) {
        el.save({read_status: true}, {wait:true}).done(function(data) {
      console.log(data)
      that.checkForNewMessages()

    })
        // that.options.baseCollection.add(el,{merge: true, wait: true})
      }
    })
  }
})