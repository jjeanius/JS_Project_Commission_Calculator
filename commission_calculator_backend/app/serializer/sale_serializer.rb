class SaleSerializer < ActiveModel::Serializer
    belongs_to :product
    attributes :id, :product_id, :quantity, :price, :commission_rate, :commission_amount, :commission_type

end
