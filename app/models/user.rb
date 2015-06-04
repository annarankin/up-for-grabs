class User < ActiveRecord::Base
  has_many :closets
  has_many :items, through: :closets

  has_many :wishlists
  has_many :items, through: :wishlists

  has_many :favorites
  has_many :items, through: :favorites

  has_many :messages, class_name foreign_key: "user_id"
  has_many :messages, foreign_key: "manager_id"

  has_attached_file :avatar,
                    storage: :s3,
                    s3_credentials: {:bucket => "up-for-grabs", :access_key_id => ENV['S3_KEY'], :secret_access_key => ENV['S3_SECRET']}
# Trying first with a hash
  # def s3_credentials
  #   {:bucket => "xxx", :access_key_id => "xxx", :secret_access_key => "xxx"}
  # end
end
