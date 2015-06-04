# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([{email: 'bobby@digital.dev', name: 'BobbyDigiDev' , location: 'NYC, New York', about_me: 'Awesome person with awesome taste in hats', password: 'KNOPE' },
    {email: 'liz@cat.lady' , name: 'FonSUAVEca' , location: 'NYC' , about_me: 'KITTIIEESSS', password: 'KNOPE' },
    {email: 'simmy@simmysimmysimmy.more' , name: 'SimCity' , location: 'NYC' , about_me: 'Simmy simmy simmy simmy simmy simmy simmy', password: 'KNOPE' }])


Closet.create([
    {user_id: 1, name: 'Bobby\'s Closet' },
    {user_id: 2, name: 'El Closet de Lizaboop' },
    {user_id: 3, name: 'Original Sim' }
  ])

Item.create([
    {closet_id: 1, type: 'hat', size: 'One Size', color: 'Black', description: 'Super cool hat I got as a wedding present', expiration_date: '2015-07-04 00:00:00' },
    {closet_id: 1, type: 'shirt', size: 'M' , color: '', description: , expiration_date: '2015-07-04 00:00:00' },
    {closet_id: , type: , size: , color: , description: , expiration_date: '2015-07-04 00:00:00' },
    {closet_id: , type: , size: , color: , description: , expiration_date: '2015-07-04 00:00:00' },
    {closet_id: , type: , size: , color: , description: , expiration_date: '2015-07-04 00:00:00' }
  ])







