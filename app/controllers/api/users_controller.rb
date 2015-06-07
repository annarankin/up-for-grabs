module Api
  class UsersController < ApplicationController
    def create
      new_user = User.new(user_params)
      new_user.save
      # Automatically logs in the newly created user
      session[:user_id] = new_user.id
      redirect_to :root
    end

    def show
      if current_user 
        user = User.find(@current_user.id)
        render json: user.to_json({
          only: [:email, :name, :location, :about_me, :id],
          include: {
            wishlist_items: {},
            favorite_closets: {},
            closets: {},
            items: {}
          },
          methods: :avatar
        })
      else
        render plain: "User not found."
      end
    end

    def update
      if current_user 
        user = User.find(@current_user.id)
        user.update(user_params)
        # NOTE - add logic to render one thing for HTML, one for AJAX - talk to Julie
        render json: user.to_json({
            only: [:email, :name, :location, :about_me, :id],
            include: {
              wishlist_items: {},
              favorite_closets: {},
              closets: {},
              items: {}
            },
            methods: :avatar
          })
      else
  render plain: "User not found."
      end
    end

    private
    def user_params
      params.require(:user).permit(:name, :email, :password, :location, :about_me, :avatar)
    end

  end
end