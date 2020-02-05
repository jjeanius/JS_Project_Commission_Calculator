class Sale {         // create a new instances of sale
    constructor(
       commissionRate,
       price,
       quantity,
       product,
       commission,
      ) {
        this.commissionRate = commissionRate
        this.price = price;
        this.quantity = quantity;
        this.product = product;
        this.commission = commission;
        this.products = new Products();  // create new instances of Products class
        }
    }