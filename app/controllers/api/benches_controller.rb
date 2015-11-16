class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.in_bounds(params[:bounds]).includes(:reviews)
    if params[:minSeats]
      @benches = @benches.where("seating >= ?", params[:minSeats] )
    end
    if params[:maxSeats]
      @benches = @benches.where("seating <= ?", params[:maxSeats] )
    end

    render :index
  end
  def show
    @bench = Bench.find(params[:id])
    render :show
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save!
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end
  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end
