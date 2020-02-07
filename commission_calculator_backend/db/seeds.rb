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

s1 = Sale.create(:product_id=> 1, :commission_rate=>35, :price=>25, :quantity=>10000, :commission_type=> "bps", :commission_amount=> 875)
s2 = Sale.create(:product_id=> 2, :commission_rate=>40, :price=>25, :quantity=>10000, :commission_type=> "bps", :commission_amount=> 1000)
s3 = Sale.create(:product_id=> 3, :commission_rate=>10, :price=>10, :quantity=>1000,  :commission_type=> "percentage", :commission_amount=> 1000)
s4 = Sale.create(:product_id=> 4, :commission_rate=>20, :price=>15, :quantity=>1000,  :commission_type=> "percentage", :commission_amount=> 5000)
s5 = Sale.create(:product_id=> 5, :commission_rate=>15, :price=>20, :quantity=>10000, :commission_type=>"bps", :commission_amount=> 300)
@sales  = Sale.all