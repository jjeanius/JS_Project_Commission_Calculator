class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|
      t.integer :commission_rate
      t.integer :price
      t.integer :quantity
      t.integer :product_id
      t.integer :commission_amount
      t.string :commission_type

      t.timestamps
    end
  end
end
