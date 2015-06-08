module Api
  class WishlistsController < ApplicationController

    def index
      if current_user
        user_id = @current_user.id
        wishlisted_items = Item.joins(:wishlists).where(wishlists: {user_id: user_id})
        # The SQL I want: 
         # SELECT * FROM items LEFT JOIN wishlists ON items.id = wishlists.item_id LEFT JOIN users ON users.id = wishlists.user_id WHERE wishlists.user_id = 1;

        # wishlists = Wishlist.where({user_id: current_user.id})
        render json: wishlisted_items.to_json(
          include: {
            user:{
              only: [:id, :name],
              # methods: :is_wishlisted_by_user?
                },
            wishlists: {
              only: [:id, :user_id],
              methods: :is_wishlisted_by_user?
              }
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
        byebug
        render json: wishlisted_item.to_json(
          include: {
            user:{
              only: [:id, :name],
              # methods: :is_wishlisted_by_user?
                },
            current_user: {methods: :is_wishlisted_by_user?},
            wishlists: {
              only: [:id, :user_id]
              # methods: :is_wishlisted_by_user?
              }
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
            user:{only: [:id, :name]},
            wishlists: {only: [:user_id]}
            },
          methods: :photo )
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
            user:{only: [:id, :name]},
            wishlists: {only: [:user_id]}
            },
          methods: :photo )
    end
    
    private
    def wishlist_params
      params.permit(:id)
    end

  end
end