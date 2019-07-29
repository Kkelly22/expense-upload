class ExpenseMailer < ApplicationMailer
	default from: 'kk504408@gmail.com'
	
	def notify(expense)
    	attachment = expense.attachment
    	description = expense.description[0..25]
    	price = "$40.00"
    	date = Time.now.strftime("%m/%d/%Y")

    	background = Rails.root.join('public', 'expense-report-img.png')
    	path = Rails.root.join('public', 'expense-report.pdf')
    	create_pdf(background, path, description, price, date)

    	attachments.inline[attachment] = File.read(path)
   		mail(to: expense.email,subject: "Notification")
  	end

  	def create_pdf(background, path, description, price, date)
  		Prawn::Document.generate(path, :page_layout => :portrait) do
  			image background, :image_position => [1,1], :fit => [500,650]
  			draw_text description, :at => [100,520]
  			draw_text price, :at => [400,520]
  			draw_text price, :at => [340,520]
        draw_text price, :at => [400,220]
  			draw_text date, :at => [30,520]
  		end
  	end
end
