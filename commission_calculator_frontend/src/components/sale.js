class Sale {  // create a new instance of sale js components
  constructor(saleJSON){
  //this.sale = saleJSON
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
console.log(this)



/*
[1] pry(#<SalesController>)> params
=> <ActionController::Parameters {"sale"=>["Fixed Income-Test", "12", "1000", "21", "percentage"], "controller"=>"sales", "action"=>"create"} permitted: false>

*[1] pry(#<SalesController>)> sale_params
NoMethodError: undefined method `permit' for ["Fixed Income-Test", "12", "1000", "16", "percentage"]:Array
from /mnt/c/Users/jjean/JS_Project_Commission_Calculator/commission_calculator_backend/app/controllers/sales_controller.rb:73:in `sale_params'
*/