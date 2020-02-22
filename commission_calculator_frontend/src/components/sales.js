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
             sales.forEach(sale => this.sales.push(sale))
        })
         .then(() =>{
             this.render()
         })
        }

     render(){
        const salesContainer = document.getElementById('product_name')
        salesContainer.innerHTML = "My sales here"
        console.log(this.sales)
     }
    }
