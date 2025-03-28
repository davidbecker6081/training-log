class CreateUserWorkouts < ActiveRecord::Migration[8.0]
  def change
    create_table :user_workouts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :workout, null: false, foreign_key: true
      t.datetime :date
      t.text :notes

      t.timestamps
    end

    add_index :user_workouts, [:user_id, :workout_id], unique: true
  end
end
