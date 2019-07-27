class ExpensesController < ApplicationController
	protect_from_forgery with: :null_session
	
	def create
		expense = Expense.create(expense_params)
		if expense && expense.valid?
			render json: expense, status: 201
		else
			render json: {error: "Failed to Upload"}, status: 400
		end
	end


	private

	def expense_params
		params.require(:expense).permit(:name, :email, :phone_number, :description, :attachment)
	end
end
