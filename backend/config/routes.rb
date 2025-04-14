Rails.application.routes.draw do
  resources :user_peak_forces
  resources :hand_types
  resources :peak_forces
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  namespace :api do
    namespace :v1 do
      get 'health_check', to: 'health_check#index'

      resources :users, only: [:index, :show] do
        resources :workouts, only: [:index, :show, :create, :update, :destroy]
      end
    end
  end
end
