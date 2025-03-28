# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

workouts = [
    { name: "Arms", description: "Bicep curls, tricep dips, and shoulder presses", date: "2023-03-27 21:59:23" },
    { name: "Legs", description: "Squats, lunges, and calf raises", date: "2023-03-27 21:59:23" },
    { name: "Core", description: "Crunches, planks, and Russian twists", date: "2023-03-27 21:59:23" },
    { name: "Cardio", description: "Running, biking, and swimming", date: "2023-03-27 21:59:23" }
]

users = [
    { name: 'David Becker' }
]

workouts.each do |workout|
    Workout.find_or_create_by!(workout)
end

users.each do |user|
    User.find_or_create_by!(user)
end

user_workouts = [
    { user_id: 1, workout_id: 1, date: "2023-03-24 21:59:23", notes: "Did 3 sets of 10 reps for each exercise" },
    { user_id: 1, workout_id: 2, date: "2023-03-25 21:59:23", notes: "Did 4 sets of 4 reps for each exercise" },
    { user_id: 1, workout_id: 3, date: "2023-03-26 21:59:23", notes: "Did 5 sets of 5 reps for each exercise" },
    { user_id: 1, workout_id: 4, date: "2023-03-27 21:59:23", notes: "Ran 3 miles in 30 minutes" }
]

user_workouts.each do |user_workout|
    UserWorkout.find_or_create_by!(user_workout)
end