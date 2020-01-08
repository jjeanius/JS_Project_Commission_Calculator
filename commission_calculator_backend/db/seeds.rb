# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p1 = Product.create :name=> "Fixed Income"
p2 = Product.create :name=> 'Fixed Annuality'
p3 = Product.create :name=> "Variable Annuality"
p4 = Product.create :name=> "529 Educational"
p5 = Product.create :name=> "Mutual Funds"

s1 = Sale.create :commission_rate_basis_point=>35, :commission_rate_percentage=>0, :price=>25, :quantity=>1000, :product_id=> 1, :commission_amount=>87.5
s2 = Sale.create :commission_rate_basis_point=>40, :commission_rate_percentage=>0, :price=>25, :quantity=>1000, :product_id=> 2, :commission_amount=>100
s3 = Sale.create :commission_rate_basis_point=>0, :commission_rate_percentage=>10, :price=>10, :quantity=>1000, :product_id=> 3, :commission_amount=>1000
s4 = Sale.create :commission_rate_basis_point=>0, :commission_rate_percentage=>15, :price=>15, :quantity=>1000, :product_id=> 4, :commission_amount=>2250
s5 = Sale.create :commission_rate_basis_point=>0, :commission_rate_percentage=>20, :price=>20, :quantity=>1000, :product_id=> 5, :commission_amount=>4000