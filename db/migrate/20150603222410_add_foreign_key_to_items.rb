class AddForeignKeyToItems < ActiveRecord::Migration
  def change
    # adding in a properly named foreign key to the items table.
    add_foreign_key :items, :closets
  end
end
