Rails.application.routes.draw do
  get '/clickone', to: 'games#clickone'

  get '/clickfive', to: 'games#clickfive'

  get '/numbers', to: 'games#numbers'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
