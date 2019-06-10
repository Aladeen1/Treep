Rails.application.routes.draw do
  get 'dashboard/show'
  devise_for :users
  root to: 'pages#home'
  get '/compensation', to: 'pages#compensation'
  get '/search', to:'pages#search'
  get '/about', to:'pages#about'
  get '/lesarbres', to:'pages#lesarbres'
  resources :compensations, only: [:new, :create]
  resources :flights, only: [:create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
