class SaleSerializer < ActiveModel::Serializer
    belongs_to :product
    attributes :id, :product_id, :quantity, :price, :commission_rate_basis_point, :commission_rate_percentage, :commission_amount


end
