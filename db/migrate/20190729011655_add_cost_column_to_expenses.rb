class AddCostColumnToExpenses < ActiveRecord::Migration[5.2]
  def change
    add_column :expenses, :cost, :string
  end
end
