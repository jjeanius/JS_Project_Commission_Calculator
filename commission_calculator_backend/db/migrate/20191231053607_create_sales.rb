class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|
      t.integer :commission_rate
      t.float :price
      t.float :quantity
      t.integer :product_id
      t.float :commission_amount
      t.string :commission_type

      t.timestamps
    end
  end
end
