class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where("id = ?", params[:id])
    render :index
  end

  def create
    @review = Review.new(review_params)

    if @review.save!
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :bench_id)
  end
end
