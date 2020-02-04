class ProductSerializer < ActiveModel::Serializer
    has_many :sales
    attributes :id, :name






end

