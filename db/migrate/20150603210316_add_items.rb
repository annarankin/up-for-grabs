class AddItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :closet_id
      t.string :type
      t.string :size
      t.string :color
      t.string :description
      t.date :expiration_date
      # paperclip gem handles attachment uploading
      t.attachment :photo
      t.timestamps null: false
    end
    add_foreign_key :closets, :items
  end
end
