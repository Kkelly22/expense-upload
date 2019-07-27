class ExpensesController < ApplicationController
	def create
		expense = Expense.create(expense_params)
	end


	private

	def expense_params
		params.require(:expense).permit(:name, :email, :phone_number, :description, :attachment)
	end
end
