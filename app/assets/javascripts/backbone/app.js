var SwapApp = SwapApp || { Models: {}, Collections: {}, Views: {}, Routers: {} };




SwapApp.initialize = function(){
  var item = new SwapApp.Models.Item({id: 1})
  item.fetch()
  var itemView = new SwapApp.Views.ItemView({model: item})
  debugger
}


$(function(){
  console.log($('[data-template="item-card"]').html())
  SwapApp.initialize()
})