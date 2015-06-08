class Wishlist < ActiveRecord::Base
  belongs_to :user
  belongs_to :item
  # attr_accessor :current_user

  # def is_wishlisted_by_user?
  #   # current_user_id = session[:id]
  #     if user_id == current_user
  #       puts "#{user_id} is apparently equal to #{current_user}"
  #       true
  #     else
  #       puts "#{user_id} is apparently not equal to #{current_user}"
  #       false
  #     end
  # end
end