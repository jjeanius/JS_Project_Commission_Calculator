class ProductSerializer
    include FastJsonapi::ObjectSerializer
    has_many :sales
    attributes :name




end

