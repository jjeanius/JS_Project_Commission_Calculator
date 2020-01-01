class Sale < ApplicationRecord
    belongs_to :product  # give you @sales.product
    validates :quantity, presence: true

end
