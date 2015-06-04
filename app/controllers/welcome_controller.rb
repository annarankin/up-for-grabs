class WelcomeController < ApplicationController

  def index
    if current_user
      puts "Current oozer: #{@current_user}"
      puts "User ID: #{session[:user_id]}"
      render :index
    else
      render :guest_index
    end
  end

  def signup
    @user = User.new
    render :signup
  end

end