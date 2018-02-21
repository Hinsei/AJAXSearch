class Location < ApplicationRecord
  def self.search_city(query)
    where("city ILIKE :city", city: "%#{query}%").map do |record|
      record.city 
    end
  end
end
