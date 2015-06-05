module Api 
  class ItemsController < ApplicationController

    def index 
      items = Item.all
      render json: items.to_json({
        include: { user: 
            { only: [:name, :id] }
          },
        methods: :photo
        })
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