class Sale < ApplicationRecord
    belongs_to :product  # give you @sales.product
    validates :price, presence: true
    validates :quantity, presence: true
    accepts_nested_attributes_for :product, allow_destroy: true

    def calculate_commission
      if commission_type == "bps"  # basis point calculation
         commission_amount = (@sale.quantity * @sale.price * @sale.commission_rate)/10000
      if commissiom_type == "percentage"  # percentage calculation
         commission_amount = (@sale.quantity * @sale.price)* @sale.commission_rate/100
      end
      end
    end


end
