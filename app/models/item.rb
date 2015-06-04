class Item < ActiveRecord::Base
  belongs_to :closet
  has_many :item_tags
  has_many :tags, through: :item_tags

  has_attached_file :photo,
                  storage: :s3,
                  s3_credentials: {:bucket => "up-for-grabs", :access_key_id => ENV['S3_KEY'], :secret_access_key => ENV['S3_SECRET']}
end