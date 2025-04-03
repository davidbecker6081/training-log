class PeakForcesController < ApplicationController
  before_action :set_peak_force, only: %i[ show update destroy ]

  # GET /peak_forces
  def index
    @peak_forces = PeakForce.all

    render json: @peak_forces
  end

  # GET /peak_forces/1
  def show
    render json: @peak_force
  end

  # POST /peak_forces
  def create
    @peak_force = PeakForce.new(peak_force_params)

    if @peak_force.save
      render json: @peak_force, status: :created, location: @peak_force
    else
      render json: @peak_force.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /peak_forces/1
  def update
    if @peak_force.update(peak_force_params)
      render json: @peak_force
    else
      render json: @peak_force.errors, status: :unprocessable_entity
    end
  end

  # DELETE /peak_forces/1
  def destroy
    @peak_force.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_peak_force
      @peak_force = PeakForce.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def peak_force_params
      params.fetch(:peak_force, {})
    end
end
