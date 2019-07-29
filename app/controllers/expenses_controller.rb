class ExpensesController < ApplicationController
	protect_from_forgery with: :null_session
	
	def create
		expense = Expense.create(expense_params)
		if expense && expense.valid?
			upload(expense.attachment)
			ExpenseMailer.notify(expense).deliver
			render json: expense, status: 201
		else
			render json: {error: 'Failed to Upload'}, status: 400
		end
	end

	def upload(file)
		dir = Rails.root.join('public', 'uploads')
		Dir.mkdir(dir) unless Dir.exist?(dir)
		File.open(dir.join(file), 'w+') do |file|
			file.write(file.read)
		end
	end


	private

	def expense_params
		params.require(:expense).permit(:name, :email, :phone_number, :description, :attachment, :cost)
	end
end
