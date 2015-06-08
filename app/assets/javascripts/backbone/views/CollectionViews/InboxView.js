var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Views.InboxView = Backbone.View.extend({
  initialize: function(options){
    this.options = options
    console.log('Search view initialized')
    this.renderForm();
    this.listenTo(this.collection, 'reset', this.render)
  },
  events: {
    'click [data-action="view-message"]' : 'filterMessages'
  },
  template: $('[data-template="message-title-container"]').text(),

  render: function() {
    var html = []
    this.collection.each(function(model){
      var newMessageView = new SwapApp.Views.MessageView({model: model});
      newMessageView.render();
      html.push(newMessageView.$el)
    })
    $("[id='message-thread-display']").empty()
    $("[id='message-thread-display']").append(html)
  },
  renderForm: function() {
    // this.$el.html(this.template)
    var that = this
    this.options.baseCollection.fetch().done(function(data) {
      var allUsernames = _.pluck(data, 'sender')
        
      var uniqueUsernames = _.uniq(allUsernames, false, function(el){
         return el.name
      })

      that.$el.html(Mustache.render(that.template, {names: uniqueUsernames}))
      
    })
  },
  filterMessages: function(event) {
    console.log(event)
    
    var filter = {}
    filter.

    filteredData = this.options.baseCollection.filter(function(object) {
      filtered = //(conditionsss)
      return filtered
    })
    this.collection.reset(filteredData)
  },
})











// var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

// SwapApp.Views.InboxView = Backbone.View.extend({
//   // This view will display each individual a user has corresponded with.
//   // User can click on username to display all messages exchanged with that user, listed by date.
//   // This may require a new collection?

//   initialize: function(options) {
//     var that = this
//     this.options = {}
    
    
//     this.collection.fetch().done(function(data) {
      
//       var allUsernames = _.pluck(data, 'sender')
      
//       var uniqueUsernames = _.uniq(allUsernames, false, function(el){
//        return el.name
//       })
//       this.options.filteredMessages = new SwapApp.Collections.MessagesCollection()
//       that.options.filteredMessages.reset(uniqueUsernames)
    
//     })
//     this.listenTo(this.options.filteredMessages, 'reset', this.render)

//   },
//   render: function() {
//     var html = []
//     this.options.filteredMessages.each(function(model){
//       var newMessageView = new SwapApp.Views.MessageTitleView({model: model});
//       newMessageView.render();
//       html.push(newMessageView.$el)
//     })
//     $("[id='message-titles']").empty()
//     $("[id='message-titles']").append(html)
//   }
// })