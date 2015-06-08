class AddReadStatusToMessages < ActiveRecord::Migration
  def change
      change_table :messages do |t|
      t.boolean :read_status, default: false
    end
  end
end
