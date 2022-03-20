class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers


  attributes :id, :first_name, :last_name, :username, :email, :age, :password, :password_confirmation, :bio

  # object.image.attach(
  #   io: File.open('prof1.jpg'),
  #   filename: 'prof1.jpg')
  # }
  # end

end