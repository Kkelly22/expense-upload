class Expense < ApplicationRecord
	validates :attachment, presence: true
	validates :phone_number, telephone_number: {country: :us, types: [:area_code_optional, :fixed_line, :mobile, :personal_number]}
#	validates :email, presence: true, format: { with: /\b(@cmecorp)\b/, message: "must be of format @cmecorp" }
	validate :phone_number_without_alpha

	def phone_number_without_alpha
		if !phone_number.scan(/[a-zA-Z]/).empty?
			errors.add(:phone_number, "numerics found")
		end
	end
end
