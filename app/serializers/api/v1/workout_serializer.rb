class Api::V1::WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date
end