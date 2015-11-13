class Bench < ActiveRecord::Base


  def self.in_bounds(bounds)
    Bench.where("lat >= #{bounds["southWest"]["lat"]} AND lng >= #{bounds["southWest"]["lng"]}")
         .where("lat <= #{bounds["northEast"]["lat"]} AND lng <= #{bounds["northEast"]["lng"]}")
  end
end
