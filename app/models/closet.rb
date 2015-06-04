class Closet < ActiveRecord::Base
  belongs_to :user
  has_many :items
  has_many :favorites
end