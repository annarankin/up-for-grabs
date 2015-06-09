var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.InboxView = Backbone.View.extend({
  initialize: function(options){
    this.options = options
    this.options.filter = {}
    this.renderForm();
    this.listenTo(this.collection, 'reset', this.render)
    this.listenTo(this.collection, 'add', this.renderOne)
    this.listenTo(this, 'replyAdded', this.filterMessages)
    // this.listenTo(SwapApp.event_bus, 'newMessage', this.changeInboxNew)
    this.listenTo(SwapApp.event_bus, 'newMessage', this.addMessage)
    // this.listenTo(this.options.baseCollection, 'add', this.filterMessages)
  },
  events: {
    'click [data-action="view-message"]' : 'filterMessages',
    'click [data-action="message-reply-submit"]' : 'submitReply'
  },
  template: $('[data-template="message-title-container"]').text(),
  replyTemplate: $('[data-template="message-reply-form"]').text(),
  render: function() {
    SwapApp.event_bus.trigger('doneFiltering')

    otherUserId = $(event.target).data('id') || $('[data-action="message-reply-submit"]').data('id')

    $('#reply-form').remove()
    var html = []
    this.collection.each(function(model){
      var newMessageView = new SwapApp.Views.MessageView({model: model});
      newMessageView.render();
      html.push(newMessageView.$el)
    })
    $("[id='message-thread-display']").empty()
    $("[id='message-thread-display']").append(html)
    var newDiv = $('<div>')
    newDiv.attr('id', 'reply-form')
    newDiv.html(Mustache.render(this.replyTemplate, {id: otherUserId}))
    this.$el.append(newDiv)
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
    // console.log(event)
    this.options.filter.id = $(event.target).data('id') || this.options.filter.id
    var that = this
    filteredData = this.options.baseCollection.filter(function(object) {
      return object.attributes.sender.id == that.options.filter.id || (object.attributes.user_id == that.options.filter.id && object.attributes.sender_id == SwapApp.currentUser.get('id'))
    })
    var that = this
    this.collection.reset(filteredData)
  },
  submitReply: function(event) {
    event.preventDefault();
    newMessage = {}
    newMessage.message = $('#message-reply').val()
    newMessage.user_id = $(event.target).data('id')
    newMessage.sender_id = SwapApp.currentUser.get('id')
    // newMessage.read_status = true
    // this.options.baseCollection.create(newMessage, {wait: true})
    this.collection.create(newMessage, {wait: true})
    // var data = {}
    // data.target = $('[data-action="message-reply-submit"]')
    // this.trigger('replyAdded', data)
  },
  addMessage: function(model) {
    // console.log('Message addeddddd')
    this.collection.add(model)
    $('#message-reply').val("")
    debugger
  },
  announce: function(data) {
    console.log(data.get('read_status'))
  },
  renderOne: function(model) {
    var newMessageView = new SwapApp.Views.MessageView({model: model});
    newMessageView.render();
    $("[id='message-thread-display']").append(newMessageView.$el)
  }
})


// add a 'read' boolean column to all messages, default to false
// if any messages have 'read' set to false, alert user somehow
// if user visits inbox page, the user whose messages are unread's row has icon
// if user clicks on message thread w/unread messages, every message's 'read' boolean is set to true - ajax call
// app queries server every 10 seconds in bg to check for new messages

