module Api
  class ClosetsController < ApplicationController
  
    def index
      if current_user
        closets = Closet.where(user_id: @current_user.id )
        render json: closets.to_json(include: {items: {}})
      else
        closets = Closet.all
        render json: closets.to_json(include: {items: {}})
      end
    end

    def show
        closets = Closet.find(params[:id])
        render json: closets.to_json(include: {items: {}})
    end

  end
end
