class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_not_found
    
        def index
          render json: User.all
        end
        
        def test
          render json: User.first
        end
    
    
    
        def show
          user = User.find_by(id: session[:user_id])
          render json: user
        end
        
        def create
          user = User.create!(user_params)
          session[:user_id] = user.id
          render json: user, status: :created
        end
        
        def update
          user = User.find_by(id: session[:user_id])
          user.update!(user_params)
          render json: user, status: :ok
        end
        
        def destroy
          user = User.find_by(id: params[:id])
          user.destroy!
          head :no_content
        end 
        
        private
        
          def user_params
            params.permit(:username, :first_name, :last_name, :password, :password_confirmation,  :age, :bio, :email, :image)
          end
        
          def user_update_params
            params.permit(:username, :first_name, :last_name, :password, :password_confirmation,  :age, :bio, :email, :image)
          end
    
          def render_not_found(invalid)
            render json: { errors: invalid.errors.full_messages}
          end
        
    end
    