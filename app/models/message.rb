class Message < ActiveRecord::Base

  belongs_to :user
  # setting up the Message model to work with a "sender" method, which accesses the User model by foreign key 'sender_id'. This is in addition to the above method, which also accesses the User model through 'user_id'.
  belongs_to :sender, class_name: "User", foreign_key: "sender_id"

end