# == Schema Information
#
# Table name: peak_forces
#
#  id         :bigint           not null, primary key
#  comment    :string
#  date       :datetime
#  left_max   :float
#  right_max  :float
#  tag        :string
#  unit       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe PeakForce, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
