class Sale {  // create a new instance of sale js components
  constructor(saleJSON){
    this.id = saleJSON.id
    this.commission_rate = saleJSON.commission_rate
    this.price = saleJSON.price
    this.quantity = saleJSON.quantity
    this.commission_amount = saleJSON.commission_amount
    this.commission_type = saleJSON.commission_type
    this.product = new Product(saleJSON)
    //this.product_id = saleJSON.product_id  //** move to Product class
    //this.product_name = saleJSON.product_name  //** move to Product class
    //this.product = saleJSON.product


        }
}




/*
[1] pry(#<SalesController>)> params
=> <ActionController::Parameters {"calculateSale"=>{"body"=>["Fixed Income-Test", "12", "1000", "15", "percentage"]}, "controller"=>"sales", "action"=>"create", "sale"=>{}} permitted: false>
[2] pry(#<SalesController>)> sale_params
ActionController::ParameterMissing: param is missing or the value is empty: sale
from /home/jjeanius/.rvm/gems/ruby-2.6.1/gems/actionpack-5.2.4.2/lib/action_controller/metal/strong_parameters.rb:443:in `require'

*/