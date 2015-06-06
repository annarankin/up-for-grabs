module Api

  class ClosetsController < ApplicationController
    def index
      if current_user
        closets = Closet.where(user_id: @current_user.id )
        # render json: closets.to_json
        redirect_to :root
      else
        render plain: 'No user logged in.'
      end
    end
  end

end
