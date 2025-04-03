class CreatePeakForces < ActiveRecord::Migration[8.0]
  def change
    create_table :peak_forces do |t|
      t.float :left_max
      t.float :right_max
      t.string :tag
      t.datetime :date
      t.string :comment
      t.string :unit
      
      t.timestamps
    end
  end
end
