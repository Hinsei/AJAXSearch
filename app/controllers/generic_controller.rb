class GenericController < ApplicationController
  def home
  end

  def search
    cities = Location.search_city(params["query"])
    render json: cities
  end
end
