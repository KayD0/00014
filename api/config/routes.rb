Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :sample, only: [:index]
    end
  end
end
