class Message < ActiveRecord::Base

  belongs_to :user
  # this will be interesting - setting up model to work with a "sender" method that accesses the User model alongside a "regular" dependency on a User (in this case, the recipient of a message)
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"

end