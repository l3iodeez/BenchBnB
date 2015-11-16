class Review < ActiveRecord::Base
  validates :body, :rating, presence: true
  belongs_to :bench
end
