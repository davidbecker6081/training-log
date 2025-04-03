class CreateUserPeakForces < ActiveRecord::Migration[8.0]
  def change
    create_table :user_peak_forces do |t|
      t.references :user, null: false, foreign_key: true
      t.references :peak_force, null: false, foreign_key: true
      t.references :hand_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
