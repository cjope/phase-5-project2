class User < ApplicationRecord
    has_secure_password
    # has_one_attached :image

    before_create :case_names
    before_update :case_names

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true

    def case_names
        self.first_name = first_name.capitalize unless first_name.blank?
        self.last_name = last_name.capitalize unless last_name.blank?
        self.username = username.downcase unless username.blank?    
        self.email = email.downcase unless email.blank?
    end

end
