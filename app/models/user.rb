class User < ActiveRecord::Base
  has_many :closets
  has_many :items, through: :closets

  has_many :wishlists
  has_many :items, through: :wishlists

  has_many :favorites
  has_many :items, through: :favorites

  has_many :messages, class_name foreign_key: "user_id"
  has_many :messages, foreign_key: "manager_id"

end