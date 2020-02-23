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
           console.log(this.sales)  // array of sale objects
        })
         .then(() =>{
             this.render()
         })
        }

     render(){
        console.log(this.sales)
        const salesContainer = document.getElementById('product_name')
     //   salesContainer.innerHTML = `${this.sales.map(sale => <li> ${sale.product} </li>)}`

     }
    }
