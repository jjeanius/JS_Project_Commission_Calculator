class Products {
    constructor(){
        this.Products = []  // set property of product and set it to empty array
        this.adapter = new ProductsAdapter()  // create adapter
        //this.bindEventListerners()  // at somepoint we want to evoke a method eventlisterner
        this.fetchAndLoadProducts()    // evoke the method
    }
     fetchAndLoadProducts(){
            this.adapter.getProducts().then(products => {
              console.log(products)
            })
        }
    }

       /* fetchAndLoadProducts(){
            this.adapter
            .getProducts()
            .then(products => {
              return console.log(products)
        }
            .then(()=> {
                this.render()
        })
    } 
         render(){
            const producName = document.getElementById('product_name');
            productName.innerHTML = "This is product"
            console.log('my product are', this.products)
        }
    }

*/