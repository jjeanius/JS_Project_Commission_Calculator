Rails.application.routes.draw do
  resources :sales
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/sales" => "sales#index"

  get "/products" => "products#index"

end
