class Product < ApplicationRecord
    has_many :sales

    def initializer(product_object)
        @product = product_object
    end

    def to_serialized_json
        @product.to_json (include => {
            sale => {:only => [ :commission_rate_basis_point,
                                :commission_rate_percentage,
                                :price,
                                :quantity,
                                :product_id,
                                :commission_amount]}
        })
    end


end