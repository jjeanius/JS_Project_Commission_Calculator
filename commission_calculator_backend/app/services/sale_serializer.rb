class SaleSerializer
    belongs_to :product

    def initialize(sale_object)
        @sale = sale_object
    end

    def to_serialized_json
        @sale.to_json(include => {
        :product =>{:only =>[:name]}
        })
    end

end


