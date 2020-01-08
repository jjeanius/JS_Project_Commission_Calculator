class Sale < ApplicationRecord
    belongs_to :product  # give you @sales.product
    validates :price, presence: true
    validates :quantity, presence: true

    def total_commission_bps
        @total_commission_bps = (quantity * price)/10000 * commission_rate_basis_points
    end

    def total_commission_percentage
        @total_commission_percentage = (quantity * price)* commission_rate_percentage/100
    end


end
