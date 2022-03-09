class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :perishable
      t.integer :extension
      t.date :receive_date
      t.integer :ext_type

      t.timestamps
    end
  end
end
