class AddFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :item_id
      t.integer :user_id
      t.timestamps null: false
    end
    add_foreign_key :favorites, :items
    add_foreign_key :favorites, :users
  end
end
