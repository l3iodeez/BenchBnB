# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


benches = [
  {description: "Sunset Park", lat: 40.648774, lng: -74.004902, image_url: "http://placekitten.com/300/200?image=1"},
  {description: "Greenwood Cemetary", lat: 40.655372, lng: -73.994131, image_url: "http://placekitten.com/300/200?image=2"},
  {description: "Prospect Park Ravine", lat: 40.664778, lng: -73.969814, image_url: "http://placekitten.com/300/200?image=3"},
  {description: "Brooklyn Museum", lat: 40.671656, lng: -73.965077, image_url: "http://placekitten.com/300/200?image=4"},
  {description: "Empire State Building", lat: 40.748817, lng: -73.985428, image_url: "http://placekitten.com/300/200?image=5"},
  {description: "Central Park", lat: 40.772714, lng: -73.974289, image_url: "http://placekitten.com/300/200?image=6"},
  {description: "Randall's Island", lat: 40.795382, lng: -73.925204, image_url: "http://placekitten.com/300/200?image=6"},
  {description: "First Cavalry Cemetary", lat: 40.732762, lng: -73.930252, image_url: "http://placekitten.com/300/200?image=7"},
  {description: "Fort Greene Park", lat: 40.691598, lng: -73.976377, image_url: "http://placekitten.com/300/200?image=8"}
]

benches.each do |bench|
  Bench.create!(bench)
end
