class UserPeakForcesController < ApplicationController
  before_action :set_user_peak_force, only: %i[ show update destroy ]

  # GET /user_peak_forces
  def index
    @user_peak_forces = UserPeakForce.all

    render json: @user_peak_forces
  end

  # GET /user_peak_forces/1
  def show
    render json: @user_peak_force
  end

  # POST /user_peak_forces
  def create
    @user_peak_force = UserPeakForce.new(user_peak_force_params)

    if @user_peak_force.save
      render json: @user_peak_force, status: :created, location: @user_peak_force
    else
      render json: @user_peak_force.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_peak_forces/1
  def update
    if @user_peak_force.update(user_peak_force_params)
      render json: @user_peak_force
    else
      render json: @user_peak_force.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_peak_forces/1
  def destroy
    @user_peak_force.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_peak_force
      @user_peak_force = UserPeakForce.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def user_peak_force_params
      params.fetch(:user_peak_force, {})
    end
end
