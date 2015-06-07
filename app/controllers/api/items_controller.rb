module Api 
  class ItemsController < ApplicationController

    def index 
      if params[:closet_id]
        items = Item.where(closet_id: params[:closet_id])
        render json: items.to_json({
          include: { user: 
              { only: [:name, :id] }
            },
          methods: :photo
          })  
      else
        items = Item.all
        render json: items.to_json({
          include: { user: 
              { only: [:name, :id] }
            },
          methods: :photo
          })
      end
    end

    def show
      item = Item.find(params[:id])
      render json: item.to_json({
        include: { user: 
            { only: [:name, :id] }
          },
        methods: :photo
        })
    end

  end
end