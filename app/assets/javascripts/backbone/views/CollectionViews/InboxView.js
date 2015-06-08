var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.InboxView = Backbone.View.extend({
  initialize: function(options){
    this.options = options
    console.log('Search view initialized')
    this.renderForm();
    this.listenTo(this.collection, 'reset', this.render)
    this.listenTo(this.baseCollection, 'add', this.render)
  },
  events: {
    'click [data-action="view-message"]' : 'filterMessages',
    'click [data-action="message-reply-submit"]' : 'submitReply'
  },
  template: $('[data-template="message-title-container"]').text(),
  replyTemplate: $('[data-template="message-reply-form"]').text(),
  render: function() {
    debugger
    otherUserId = $(event.target).data('id')
    var html = []
    this.collection.each(function(model){
      var newMessageView = new SwapApp.Views.MessageView({model: model});
      newMessageView.render();
      html.push(newMessageView.$el)
    })
    $("[id='message-thread-display']").empty()
    $("[id='message-thread-display']").append(html)
    $("[id='message-thread-display']").append(Mustache.render(this.replyTemplate, {id: otherUserId}))
  },
  renderForm: function() {
    var that = this
    this.options.baseCollection.fetch().done(function(data) {
     
      var allUsernames = _.pluck(data, 'sender')
        
      var uniqueUsernames = _.uniq(allUsernames, false, function(el){
         return el.name
      })

      var removedUser = _.reject(uniqueUsernames,function(el) {
        return el.name == SwapApp.currentUser.get('name')
      })

      that.$el.html(Mustache.render(that.template, {names: removedUser}))
      
    })
  },
  filterMessages: function(event) {
    console.log(event)
    
    var filter = {}
    filter.id = $(event.target).data('id')

    filteredData = this.options.baseCollection.filter(function(object) {
      return object.attributes.sender.id == filter.id || (object.attributes.user_id == filter.id && object.attributes.sender_id == SwapApp.currentUser.get('id'))
    })
    this.collection.reset(filteredData)
  },
  submitReply: function(event) {
    newMessage = {}
    newMessage.message = $('#message-reply').val()
    newMessage.user_id = $(event.target).data('id')
    newMessage.sender_id = SwapApp.currentUser.get('id')
    this.options.baseCollection.create(newMessage, {wait: true})
  }
})


// add a 'read' boolean column to all messages, default to false
// if any messages have 'read' set to false, alert user somehow
// if user visits inbox page, the user whose messages are unread's row has icon
// if user clicks on message thread w/unread messages, every message's 'read' boolean is set to true
// app queries server every 10 seconds in bg to check for new messages

