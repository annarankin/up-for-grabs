class ChangeMessages < ActiveRecord::Migration
  def change
    # Adding additional columns to messages table and setting up two foreign keys
    change_table :messages do |t|
      t.string :message
    end
    add_foreign_key :messages, :users, column: :user_id
    add_foreign_key :messages, :users, column: :sender_id
  end
end
