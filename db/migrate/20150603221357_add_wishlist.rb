class AddWishlist < ActiveRecord::Migration
  def change
    create_table :wishlists do |t|
      t.integer :item_id
      t.integer :user_id
      t.timestamps null: false
    end
    add_foreign_key :wishlists, :items
    add_foreign_key :wishlists, :users
  end
end
