class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all
    render :index
  end
  def create
    if @bench.create!(bench_params)
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end
end
