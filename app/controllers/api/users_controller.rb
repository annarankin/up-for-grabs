module Api
  class UsersController < ApplicationController
    def create
      new_user = User.new(user_params)
      new_user.save
      # Automatically logs in the newly created user
      session[:user_id] = new_user.id
      redirect_to :root
    end

    private
    def user_params
      params.require(:user).permit(:name, :email, :password, :location, :about_me, :avatar)
    end

  end
end