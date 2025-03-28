class CreateWorkouts < ActiveRecord::Migration[8.0]
  def change
    create_table :workouts do |t|
      
      t.string :name
      t.string :description
      t.datetime :date
      
      t.timestamps
    end
  end
end
