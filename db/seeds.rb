# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


benches = [
  {description: "Sunset Park", lat: 40.648774, lng: -74.004902},
  {description: "Greenwood Cemetary", lat: 40.655372, lng: -73.994131},
  {description: "Prospect Park Ravine", lat: 40.664778, lng: -73.969814},
  {description: "Brooklyn Museum", lat: 40.671656, lng: -73.965077}
]

benches.each do |bench|
  Bench.create!(bench)
end
