# == Schema Information
#
# Table name: user_workouts
#
#  id         :bigint           not null, primary key
#  date       :datetime
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#  workout_id :bigint           not null
#
# Indexes
#
#  index_user_workouts_on_user_id                 (user_id)
#  index_user_workouts_on_user_id_and_workout_id  (user_id,workout_id) UNIQUE
#  index_user_workouts_on_workout_id              (workout_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#  fk_rails_...  (workout_id => workouts.id)
#
class UserWorkout < ApplicationRecord
    belongs_to :user
    belongs_to :workout
end
