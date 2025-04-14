class AddDiscardedAtToWorkouts < ActiveRecord::Migration[8.0]
  def change
    add_column :workouts, :discarded_at, :datetime
    add_index :workouts, :discarded_at
  end
end
