class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :first_name, :last_name, :username, :email, :age, :password, :password_confirmation, :image

  def image
    if object.image.attached?
      {
        url: rails_blob_url(object.image, only_path: true)
      }
    end
  end

end