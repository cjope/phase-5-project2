class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :perishable
      t.integer :storage
      t.integer :extension
      t.date :receive_date #use exp_date instead??
      t.date :exp_date
      t.integer :ext_type

      t.timestamps
    end
  end
end
