class HandTypesController < ApplicationController
  before_action :set_hand_type, only: %i[ show update destroy ]

  # GET /hand_types
  def index
    @hand_types = HandType.all

    render json: @hand_types
  end

  # GET /hand_types/1
  def show
    render json: @hand_type
  end

  # POST /hand_types
  def create
    @hand_type = HandType.new(hand_type_params)

    if @hand_type.save
      render json: @hand_type, status: :created, location: @hand_type
    else
      render json: @hand_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /hand_types/1
  def update
    if @hand_type.update(hand_type_params)
      render json: @hand_type
    else
      render json: @hand_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /hand_types/1
  def destroy
    @hand_type.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_hand_type
      @hand_type = HandType.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def hand_type_params
      params.fetch(:hand_type, {})
    end
end
