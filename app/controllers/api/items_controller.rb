module Api 
  class ItemsController < ApplicationController

    def index 
      if params[:closet_id]
        items = Item.where(closet_id: params[:closet_id])
        render json: items.to_json({
          include: { 
            user: 
              { only: [:name, :id] },
            tags: {}
          },
          methods: :photo
          })  
      else
        items = Item.all
        render json: items.to_json({
          include: { user: 
              { only: [:name, :id] },
            tags: {}
            },
          methods: :photo
          })
      end
    end

    def show
      item = Item.find(params[:id])
      render json: item.to_json({
        include: { user: 
            { only: [:name, :id] },
            tags: {}
          },
        methods: :photo
        })
    end

    def create 
      new_item = Item.new(item_params)
      new_item.save
      render json: new_item.to_json({
        include: { user: 
            { only: [:name, :id] },
            tags: {}
          },
        methods: :photo
        })      
    end

    private
    def item_params
      params.require(:item).permit(:closet_id, :clothing_type, :description, :size, :expiration_date, :photo)
    end
  end
end