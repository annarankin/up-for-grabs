class LoginsController < ApplicationController

  def index 

  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      puts "User #{user.email} Authenticated!"
      session[:user_id] = user.id
      redirect_to :root
    else
      puts "User #{params[:email]} not found."
      @message = "NOOPE"
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to :root  
  end

end