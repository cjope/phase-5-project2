class ItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :first_name, :last_name, :username, :email, :age, :password, :password_confirmation, :image
  def image 
    byebug
    # object.image.service_url if object.image.attached?
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  # def image
  #   if object.image.attached?
  #     {
  #       url: rails_blob_url(object.image)
  #     }
  #   end
  # end

  # def image
  #     rails_blob_path(image, only_path: true) if object.image.attached?
  # end




end