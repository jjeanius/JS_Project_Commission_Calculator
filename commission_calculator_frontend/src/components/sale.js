
class Sale {         // create a new instances of sale
    constructor(
       commissionRate,
       price,
       quantity,
       product,
       commission,
       commissionType
      ) {
        this.commissionRate = commissionRate
        this.price = price;
        this.quantity = quantity;
        this.product = product;
        this.commission = commission;
        this.commissionType = commissionType
        
        }
    }

    console.log(Sale)