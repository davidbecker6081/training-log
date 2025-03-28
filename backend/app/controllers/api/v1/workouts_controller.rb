class Api::V1::WorkoutsController < ApplicationController
    before_action :set_user, only: %i[index]

    def index
        workouts = @user.workouts
        render json: workouts
    end

    def show
        workout = Workout.find(params[:id])
        render(
            json: workout,
            serializer: Api::V1::WorkoutSerializer
        )
    end

    private

    def set_user
        @user ||= User.find(params[:user_id])
    end
end