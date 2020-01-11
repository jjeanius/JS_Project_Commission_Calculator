class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|
      t.float :commission_rate_basis_point
      t.integer :commission_rate_percentage
      t.float :price 
      t.float :quantity
      t.integer :product_id
      t.float :commission_amount

      t.timestamps
    end
  end
end
