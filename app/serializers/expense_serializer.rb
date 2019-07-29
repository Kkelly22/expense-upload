class ExpenseSerializer < ActiveModel::ExpenseSerializer
	attributes :name, :email, :phone_number, :description, :attachment, :cost
end