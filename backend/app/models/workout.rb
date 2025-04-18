# == Schema Information
#
# Table name: workouts
#
#  id           :bigint           not null, primary key
#  date         :datetime
#  description  :string
#  discarded_at :datetime
#  name         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
# Indexes
#
#  index_workouts_on_discarded_at  (discarded_at)
#
class Workout < ApplicationRecord
    include Discard::Model
    
    default_scope -> { kept }

    has_many :user_workouts
    has_many :users, through: :user_workouts

    validates :name, :description, length: { minimum: 3, maximum: 256 }
end
