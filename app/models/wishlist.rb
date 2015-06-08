class Wishlist < ActiveRecord::Base
  belongs_to :user
  belongs_to :item


  def is_wishlisted_by_user?(current_user)
      if user_id == current_user["id"]
        puts "#{user_id} is apparently equal to #{current_user["id"]}"
        true
      else
        puts "#{user_id} is apparently not equal to #{current_user["id"]}"
        false
      end
  end
end