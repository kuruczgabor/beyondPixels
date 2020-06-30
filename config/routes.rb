Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :photos, only: [:create, :index, :show, :destroy, :update]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"

end
