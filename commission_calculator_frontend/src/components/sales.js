class Sales {         // create a new instances of sale
    constructor(){
       this.sales = []  // set property of sale and set it to an empty array
       this.adapter = new SalesAdapter()  //  create adapter
       // this.bindEventListerners()  //at somepoint we want to evoke a method eventlisterner
       this.fetchAndLoadSales()  // evoke the method
    }
        fetchAndLoadSales(){
          this.adapter
          .getSales()
          .then(sales => {
              sales.forEach(sale => this.sales.push(new Sale(sale)))  // push new sale instance into Sales array and passing in saleJson
          })
          .then(() => {
              this.render()
          })
         }

         render() {
             const salesContainer = document.getElementById('product_column');
             salesContainer.innerHTML += this.sales.map(sale => `<li>${sale.sale.product.name}<li>`).join('')

            const priceContainer = document.getElementById('price_column');
            priceContainer.innerHTML += this.sales.map(sale => `<li> ${sale.sale.price} </li>`).join('')
         }
     }
