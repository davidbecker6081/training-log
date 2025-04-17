class Api::V1::WorkoutsController < ApplicationController
    before_action :set_user, only: %i[index create]

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

    def create
        workout = @user.workouts.build(workout_params)

        if workout.save
            @user.user_workouts.create(workout_id: workout.id)
            render json: workout, status: :created
        else
            render json: {
                    message: 'Unable to create workout',
                    errors: workout.errors.messsages
                }, status: :unprocessable_entity
        end
    end

    def update
        workout = Workout.find(params[:id])

        if workout.update(workout_params)
            render json: workout, status: :ok
        else
            render json: {
                    message: 'Unable to update workout',
                    errors: workout.errors.messages
                }, status: :unprocessable_entity
        end
    end

    def destroy
        workout = Workout.find(params[:id])
        workout.discard
        head :no_content
    end

    private

    def set_user
        @user ||= User.find(params[:user_id])
    end

    def workout_params
        params.require(:workout).permit(:name, :description, :date)
    end
end
