# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_04_01_204535) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "hand_types", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "peak_forces", force: :cascade do |t|
    t.float "left_max"
    t.float "right_max"
    t.string "tag"
    t.datetime "date"
    t.string "comment"
    t.string "unit"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_peak_forces", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "peak_force_id", null: false
    t.bigint "hand_type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hand_type_id"], name: "index_user_peak_forces_on_hand_type_id"
    t.index ["peak_force_id"], name: "index_user_peak_forces_on_peak_force_id"
    t.index ["user_id"], name: "index_user_peak_forces_on_user_id"
  end

  create_table "user_workouts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "workout_id", null: false
    t.datetime "date"
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "workout_id"], name: "index_user_workouts_on_user_id_and_workout_id", unique: true
    t.index ["user_id"], name: "index_user_workouts_on_user_id"
    t.index ["workout_id"], name: "index_user_workouts_on_workout_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "user_peak_forces", "hand_types"
  add_foreign_key "user_peak_forces", "peak_forces"
  add_foreign_key "user_peak_forces", "users"
  add_foreign_key "user_workouts", "users"
  add_foreign_key "user_workouts", "workouts"
end
