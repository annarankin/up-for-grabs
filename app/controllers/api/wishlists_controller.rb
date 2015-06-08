module Api
  class WishlistsController < ApplicationController

    def index
      if current_user
        user_id = @current_user.id
        wishlisted_items = Item.joins(:wishlists).where(wishlists: {user_id: user_id})
        render json: wishlisted_items.to_json(
          include: {
            user:{
              only: [:id, :name],
                },
            wishlists: {
              except: [:created_at, :updated_at]
              },
            favorite_users: {only: [:id, :name]}

            },
          methods: [:photo])
      else
        render plain: "Not logged in broski"  
      end
    end

    def show
      if current_user
        user_id = @current_user.id
        wishlisted_item = Item.joins(:wishlists).find_by(wishlists: {id: params[:id]})
        # wishlisted_item.current_user = user_id
        # binding.pry
        render json: wishlisted_item.to_json(
          include: {
            user:{
              only: [:id, :name],
                },
            wishlists: {
              except: [:created_at, :updated_at]
              },
            favorite_users: {only: [:id, :name]}

            },
          methods: [:photo])
      else
        render plain: "Not logged in broski"  
      end
    end

    def create
      # find where user_id & item_id
      if current_user
        user_id = @current_user.id
        new_wishlist = Wishlist.new({user_id: user_id, item_id: params[:id]})
        new_wishlist.save
        wishlisted_item = Item.joins(:wishlists).find_by(wishlists: {id: new_wishlist.id, user_id:user_id})
        render json: wishlisted_item.to_json(
          include: {
            user:{
              only: [:id, :name],
                },
            wishlists: {
              except: [:created_at, :updated_at]
              },
            favorite_users: {only: [:id, :name]}

            },
          methods: [:photo])
      else
        render plain: "Wtf are you trying to do??"  
      end
    end

    def destroy
      wishlist = Wishlist.find(params[:id])
      wishlist.destroy
      un_wishlisted_item = Item.joins(:wishlists).find_by(wishlists: {id: wishlist.id})
      render json: un_wishlisted_item.to_json(
          include: {
            user:{
              only: [:id, :name],
                },
            wishlists: {
              only: [:id, :user_id]
              },
            favorite_users: {only: [:id, :name]}

            },
          methods: [:photo])
    end
    
    private
    def wishlist_params
      params.permit(:id)
    end

  end
end