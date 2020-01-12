class SaleSerializer
    include FastJsonapi::ObjectSerializer
    attributes :commission_rate_basis_point, :commission_rate_percentage, :price, :quantity, :product_id, :commission_amount

end