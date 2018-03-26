class GenericController < ApplicationController
  def home
  end

  def search
    @cities = Location.search_city(params["query"])
    respond_to do |format|
      format.json { render json: @cities }
      format.js # remote: true is sent a js format and sends you to search.js.erb
    end
  end
end
