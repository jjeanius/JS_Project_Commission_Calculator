class Sale < ApplicationRecord
    belongs_to :product  # give you @sales.product

    def total_commission_bps
        @total_commission_bps = (quantity * sales_price)



end
