# == Schema Information
#
# Table name: user_peak_forces
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  hand_type_id  :bigint           not null
#  peak_force_id :bigint           not null
#  user_id       :bigint           not null
#
# Indexes
#
#  index_user_peak_forces_on_hand_type_id   (hand_type_id)
#  index_user_peak_forces_on_peak_force_id  (peak_force_id)
#  index_user_peak_forces_on_user_id        (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (hand_type_id => hand_types.id)
#  fk_rails_...  (peak_force_id => peak_forces.id)
#  fk_rails_...  (user_id => users.id)
#
class UserPeakForceSerializer < ActiveModel::Serializer
  attributes :id
end
