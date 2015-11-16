json.extract!(
@bench,
:id, :description, :lat, :lng, :seating
)
json.reviews do
  json.array!(@bench.reviews) do |review|
    json.extract!(
    review,
    :id, :body, :rating, :bench_id
    )
  end
end
