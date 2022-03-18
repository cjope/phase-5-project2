class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  
  attributes :id, :first_name, :last_name, :username, :email, :age, :password, :password_confirmation, :bio, :image

  def image
    # binding.irb
    if object.image.attached?
      {
        url: rails_blob_url(object.image, only_path: true)
      }
    end
  end

    # def image
    #     rails_blob_url(image , only_path: true) if object.image.attached?
    # end

      # self.image.attach(io:
      # File.open(Rails.root.join('app', 'assets', 'images', 'prof1.jpg')),
      # filename: 'prof1.jpg',
      # content_type: 'image/jpg')
  # end  

end