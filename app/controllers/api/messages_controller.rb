module Api
  class MessagesController < ApplicationController
    
    def index
      if current_user
        all_user_messages = Message.where("user_id = #{@current_user.id} OR sender_id = #{@current_user.id}")
        render json: all_user_messages.to_json(include: {sender: {only: [:name, :id]}})
      else
        render plain: "No user logged in son"
      end

    end

    def create
      new_message = Message.new(jam)
      new_message.save
      render json: new_message.to_json(include: {sender: {only: [:name, :id]}})
    end

    def show

    end

    private
    def jam

      params.permit(:user_id,:sender_id, :message, :read)

    end


  end
end