class Product < ApplicationRecord
    has_many :sales   # give you @product.sales
    validates :name, uniqueness: true, allow_blank: false


end
