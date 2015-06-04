class AddUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :location
      t.string :about_me
      # paperclip gem will handle avatar img uploading
      t.attachment :avatar
      t.timestamps null: false
    end
  end
end
