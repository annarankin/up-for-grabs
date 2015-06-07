var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };

SwapApp.Collections.ClosetItems = Backbone.Collection.extend({
  model: SwapApp.Models.Item,
  url:function() {
    // debugger
    var closetId = document.location.hash.split('/')[2]
    return '/api/closets/'+ closetId +'/items'
  },
  initialize: function() {
    console.log("Mmhmm yup item collection dao le dui ba")
  }
})