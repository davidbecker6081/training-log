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
FactoryBot.define do
  factory :peak_force do
    
  end
end
