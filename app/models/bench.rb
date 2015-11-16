class Bench < ActiveRecord::Base
  has_many :reviews
  
  def self.in_bounds(bounds)
    Bench.where("lat >= #{bounds["southWest"]["lat"]} AND lng >= #{bounds["southWest"]["lng"]}")
         .where("lat <= #{bounds["northEast"]["lat"]} AND lng <= #{bounds["northEast"]["lng"]}")
  end

  def self.in_seating_range(min_seats, max_seats)

  end
end
