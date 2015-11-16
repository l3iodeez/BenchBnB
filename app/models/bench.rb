class Bench < ActiveRecord::Base
  has_attached_file :image
  validates_attachment :image, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"] }

  def self.in_bounds(bounds)
    Bench.where("lat >= #{bounds["southWest"]["lat"]} AND lng >= #{bounds["southWest"]["lng"]}")
         .where("lat <= #{bounds["northEast"]["lat"]} AND lng <= #{bounds["northEast"]["lng"]}")
  end
end
