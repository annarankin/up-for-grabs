# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
    {email: 'bobby@digital.dev', name: 'BobbyDigiDev' , location: 'NYC, New York', about_me: 'Awesome person with awesome taste in hats', password: 'KNOPE' },
    {email: 'liz@cat.lady' , name: 'FonSUAVEca' , location: 'NYC' , about_me: 'KITTIIEESSS', password: 'KNOPE' },
    {email: 'simmy@simmysimmysimmy.more' , name: 'SimCity' , location: 'NYC' , about_me: 'Simmy simmy simmy simmy simmy simmy simmy', password: 'KNOPE' }
    ])


Closet.create([
    {user_id: 1, name: 'Bobby\'s Closet' },
    {user_id: 2, name: 'El Closet de Lizaboop' },
    {user_id: 3, name: 'Original Sim' }
  ])

Item.create([
    {closet_id: 1, clothing_type: 'hat', size: 'One Size', color: 'black', description: 'Super cool hat I got as a wedding present', expiration_date: '2015-07-04 00:00:00' },
    {closet_id: 1, clothing_type: 'shirt', size: 'M' , color: 'red', description: 'This is my favorite shurt', expiration_date: '2015-07-04 00:00:00' },
    {closet_id: 2, clothing_type: 'shoes', size: 'S', color: 'red', description: 'I don\'t wear shoes anymore these are ok' , expiration_date: '2015-07-04 00:00:00' },
    {closet_id: 2, clothing_type: 'dress', size: 'S', color: 'green' , description: 'I used to like this dress more, have\'nt worn it in like two years', expiration_date: '2015-07-04 00:00:00' },
    {closet_id: 3, clothing_type: 'shirt', size: 'S', color: 'black', description: 'Winky face ;)', expiration_date: '2015-07-04 00:00:00' }
  ])

Wishlist.create([
  { item_id: 3, user_id: 1},
  { item_id: 1, user_id: 2},
  { item_id: 2, user_id: 2},
  { item_id: 5, user_id: 2},
  { item_id: 2, user_id: 3},
  { item_id: 1, user_id: 3}
    ])

Favorite.create([
  { closet_id: 1, user_id: 2},
  { closet_id: 1, user_id: 3},
  { closet_id: 3, user_id: 1},
  { closet_id: 2, user_id: 1}
    ])

Tag.create([
    {name:'dressy'},
    {name:'casual'},
    {name:'cute'},
    {name:'old'},
    {name:'vintage'},
    {name:'plaid'},
    {name:'floral'}
  ])

ItemTag.create([
    {item_id: 1,tag_id: 7},
    {item_id: 2,tag_id: 2},
    {item_id: 3,tag_id: 1},
    {item_id: 3,tag_id: 3},
    {item_id: 3,tag_id: 4},
    {item_id: 3,tag_id: 5},
    {item_id: 3,tag_id: 6},
    {item_id: 4,tag_id: 6},
    {item_id: 5,tag_id: 2}
  ])

Message.create([
  {user_id: 1, sender_id: 2, message:"HAY BOBBERTS I want your hat"},
  {user_id: 1, sender_id: 2, message:"Seriously gimme"},
  {user_id: 1, sender_id: 2, message:"dude I need your hat"},
  {user_id: 1, sender_id: 3, message:"Beep boop boop"},
  {user_id: 2, sender_id: 3, message:"Hi Liz I am Simmy and not a robot imposter"},
  {user_id: 2, sender_id: 1, message:"omfg Liz. Seriously."},
  {user_id: 3, sender_id: 2, message:"Cool! Take my social security number and my credit card!"},
  {user_id: 3, sender_id: 2, message:"Oh hey btw SIMMY SIMMY SIMMY SIMMY SIMMY SIMMY"}
  ])
