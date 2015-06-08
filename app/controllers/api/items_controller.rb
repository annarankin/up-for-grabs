module Api 
  class ItemsController < ApplicationController

    def index 
      if params[:closet_id]
        items = Item.where(closet_id: params[:closet_id])
        render json: items.to_json(
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
        items = Item.all
        render json: items.to_json(
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
      end
    end

    def show
      item = Item.find(params[:id])
      render json: item.to_json(
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
    end

    def create 
      new_item = Item.new(item_params)
      new_item.save
      render json: new_item.to_json(
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
    end

    def destroy
      item = Item.find(params[:id])
      item.destroy()
      render json: item.to_json(
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
    end

    def update
      item = Item.find(params[:id])
      item.update(item_params)
      render json: item.to_json(
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
    end

    private
    def item_params
      params.require(:item).permit(:closet_id, :color, :clothing_type, :description, :size, :expiration_date, :photo)
    end
  end
end