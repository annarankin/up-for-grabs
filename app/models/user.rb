class User < ActiveRecord::Base
  has_many :closets
  # source: defines what method (defined in the Closet model) should be used when we use the closet_items method that ActiveRecord will define
  has_many :items, through: :closets, source: :items

  has_many :wishlists
  has_many :wishlist_items, through: :wishlists, source: :item

  has_many :favorites
  has_many :favorite_closets, through: :favorites, source: :closet

  # Setting up the relationship/methods between sent/received messages and the user - Message sender_id and user_id both refer back to the User model
  has_many :messages_received, class_name: "Message", foreign_key: "user_id"
  has_many :messages_sent, class_name: "Message", foreign_key: "sender_id"

  has_secure_password

  # Setting up paperclip to work with AWS
  has_attached_file :avatar,
                    storage: :s3,
                    s3_credentials: {
                      :bucket => "up-for-grabs", 
                      :access_key_id => ENV['S3_KEY'], 
                      :secret_access_key => ENV['S3_SECRET']},
                    :styles => { :medium => "300x300>", :thumb => "100x100>" },
                    # :default_url => "/images/:style/missing.png",
                    :url =>":s3_domain_url",
                    :path => '/:class/:attachment/:id_partition/:style/:filename'
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
# Trying first with a hash
  # def s3_credentials
  #   {:bucket => "xxx", :access_key_id => "xxx", :secret_access_key => "xxx"}
  # end
end
