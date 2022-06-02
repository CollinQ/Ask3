class AddNameToMicroposts < ActiveRecord::Migration[7.0]
  def change
    add_column :microposts, :name, :string
  end
end
