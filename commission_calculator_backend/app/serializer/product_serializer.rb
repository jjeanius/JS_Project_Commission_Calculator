class ProductSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name
    has_many :sales

end

