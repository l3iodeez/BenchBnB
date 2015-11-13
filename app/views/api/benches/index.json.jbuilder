json.array!(@benches) do |bench|
  json.extract!(
  bench,
  :id, :description, :lat, :lng, :image_url
  )
end
