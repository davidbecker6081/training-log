# == Schema Information
#
# Table name: workouts
#
#  id          :bigint           not null, primary key
#  date        :datetime
#  description :string
#  name        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Workout < ApplicationRecord
    belongs_to :user_workout
    has_many :user_workouts
    has_many :users, through: :user_workouts
end
