class Api::V1::HealthCheckController < ApplicationController
  def index
    render json: :ok, status: :ok
  end
end