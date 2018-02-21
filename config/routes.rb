Rails.application.routes.draw do
  root "generic#home"

  post "search", to: "generic#search"
end
