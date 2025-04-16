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
require "test_helper"

class WorkoutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
