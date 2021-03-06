Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'welcome#index'

  # Signup page.
  # resources :users, only: [:new]
  get "/signup" => 'welcome#signup', as: :sign_up

  resource :login, only: [:create, :destroy]
  get "/login" => 'logins#index', as: :new_login
  get "/logout" => 'logins#destroy', as: :logout

  namespace :api do
    resource :users, except: [:new, :edit] do
      resources :closets, except: [:new, :edit]
      resources :wishlists, except: [:new, :edit, :update]
      resources :favorites, except: [:new, :edit, :update]
      resources :messages, except: [:new, :edit]
    end
    resources :closets, except: [:new, :edit] do
      resources :items, except: [:new, :edit]
    end
    resources :items, except: [:new, :edit]
    resources :tags, except: [:new, :edit, :update]
  end











  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
