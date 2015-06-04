class WelcomeController < ApplicationController

  def index
    if current_user
      puts "Current oozer: #{@current_user}"
      puts "User ID: #{session[:user_id]}"
      render :index
    else
      redirect_to new_login_path
    end
  end

  def signup
    render :signup
  end

end