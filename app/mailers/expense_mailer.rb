class ExpenseMailer < ApplicationMailer
	default from: 'kk504408@gmail.com'
	
	def notify(expense)
      @expense = expense

      #variables
    	attachment = expense.attachment
    	description = expense.description[0..25]
    	cost = expense.cost
    	date = Time.now.strftime("%m/%d/%Y")

      #file locations
    	background = Rails.root.join('public', 'expense-report-img.png')
    	path = Rails.root.join('public', 'expense-report.pdf')
      receipt = Rails.root.join('public', 'uploads', attachment)

      #create pdf
    	create_pdf(background, path, description, cost, date)

      #send mailer
    	attachments.inline["CMEExpenses.pdf"] = File.read(path)
      attachments.inline[attachment] = File.read(receipt)
   		mail(to: expense.email,subject: "Expense submitted by " + expense.name + " for " + expense.description)
  	end

  	def create_pdf(background, path, description, cost, date)
  		Prawn::Document.generate(path, :page_layout => :portrait) do
  			image background, :image_position => [1,1], :fit => [500,650]
  			draw_text description, :at => [100,520]
  			draw_text cost, :at => [400,520]
  			draw_text cost, :at => [340,520]
        draw_text cost, :at => [400,220]
  			draw_text date, :at => [30,520]
  		end
  	end
end
