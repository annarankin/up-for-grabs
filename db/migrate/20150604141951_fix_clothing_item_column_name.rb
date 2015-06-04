class FixClothingItemColumnName < ActiveRecord::Migration
  def change
    rename_column :items, :type, :clothing_type
  end
end
