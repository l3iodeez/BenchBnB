class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.string :description, null: false
      t.decimal :lat, null: false, scale:6, precision: 10
      t.decimal :lng, null: false, scale:6, precision: 10

      t.timestamps null: false
    end
  end
end
