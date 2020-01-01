class CreateSales < ActiveRecord::Migration[5.2]
  def change
    create_table :sales do |t|
      t.string :commission_rate_basis_point
      t.string :commission_rate_percentage
      t.string :quantity
      t.string :commission_amount

      t.timestamps
    end
  end
end
