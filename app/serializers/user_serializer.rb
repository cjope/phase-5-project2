class ItemSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :age, :password, :password_confirmation, :image
end