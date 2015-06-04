class RemoveForeignKeyFromItems < ActiveRecord::Migration
  def change
    # removing a weird, oddly named foreign key from the closets table
    remove_foreign_key :items, name: :items_closet_id_fk
  end
end
