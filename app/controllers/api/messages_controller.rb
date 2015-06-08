module Api
  class MessagesController < ApplicationController
    
    def index
      if current_user
        all_user_messages = Message.where("user_id = #{@current_user.id} OR sender_id = #{@current_user.id}")
        render json: all_user_messages.to_json(include: {sender: {only: [:name]}})
      else
        render plain: "No user logged in son"
      end

    end

    def create

    end

    def show

    end

  end
end