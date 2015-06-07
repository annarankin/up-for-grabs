class Item < ActiveRecord::Base
  belongs_to :closet
  # Is defining the method for the join table strictly necessary when a has_many through: relationship is defined?
  has_one :user, through: :closet
  has_many :item_tags
  has_many :tags, through: :item_tags

  has_attached_file :photo,
                  storage: :s3,
                  s3_credentials: {:bucket => "up-for-grabs", :access_key_id => ENV['S3_KEY'], :secret_access_key => ENV['S3_SECRET']},
                  :styles => { :medium => "300x300>", :thumb => "100x100>" },
                  :default_url => "/photos/:style/missing.png",
                  :url =>":s3_domain_url",
                  :path => '/:class/:attachment/:id_partition/:style/:filename'

  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/


end