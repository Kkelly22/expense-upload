class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.string :description
      t.string :attachment
      t.timestamps
    end
  end
end
