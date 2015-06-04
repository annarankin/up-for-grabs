class RemoveUserIdFromFavorites < ActiveRecord::Migration
  def change
    remove_column :favorites, :item_id
    add_column :favorites, :closet_id, :integer
  end
end
