class ExpenseMailer < ApplicationMailer
	default from: 'kk504408@gmail.com'
	
	def notify(expense)
    	@expense = expense
    	@attachment = expense.attachment
    	path = Rails.root.join('public', 'uploads', @attachment)
    	attachments.inline[@attachment] = File.read(path)
   		mail(to: @expense.email,subject: "Notification")
  	end
end
