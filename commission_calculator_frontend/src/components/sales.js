class Sales {         // create a new instances of sale
   constructor(){
      this.sales = []  // set property of sale and set it to an empty array

      this.adapter = new SalesAdapter()  //  create adapter
      // this.bindEventListeners()
      this.fetchAndLoadSales()
      this.createSales()
      // this.clearCommission()
    }

      createSales(){
         this.productContainer = document.getElementById('product_column');
         this.productName = document.getElementById('product_name')

         this.priceContainer = document.getElementById('price_column')
         this.prix = document.getElementById('price')

         this.quantityContainer = document.getElementById('quantity_column')
         this.quantity = document.getElementById('quantity')

         this.rateContainer = document.getElementById('rate_column')
         this.commRate = document.getElementById('commission_rate')

         this.calculateButton = document.getElementById('buttonCalculate');
         this.calculateButton.addEventListener('click', this.calculateComm.bind(this));
        // Adding eventListener to calculateButton, and triger the function calculateCommission and bind this to the Sales class and not the form
      }

         calculateComm(ev){
          /*const preFetch = [
               this.prix = this.price,
               this.quantity = this.quantity,
               this.productName = this.product_name,
               this.commRate = this.commission_rate,
               this.checkbox = this.commission_type
            ]
            console.log(preFetch)  */

            ev.preventDefault()

            this.checkbox = document.querySelector('input[type="checkbox"]:checked')  // selecting commission type checkboxes

            const calculateValue = [this.productName.value, this.prix.value, this.quantity.value, this.commRate.value, this.checkbox.value]          // save these element to calculateValue so we can make POST request using adapter
           // console.log(calculateValue)

            this.adapter.calculateComm(calculateValue)
         }

      clearCommission(){
         const resetButton = document.getElementById('buttonReset')
         resetButton.addEventListener('click', this.reset.bind(this))
      }
         reset (ev){
            console.log(ev.type, ev.target, ev.currentTarget);
         }

      fetchAndLoadSales(){
         this.adapter
         .getSales()
         .then(sales => {
            console.log(sales)
            sales.forEach(sale => this.sales.push(new Sale(sale)))  // push new sale instance into Sales array and passing in saleJson
         console.log(this.sales)
         })

         .then(() => {
         this.render()
         })
      }

         render() {
               this.productContainer = document.getElementById('product_column');
               this.productContainer.innerHTML += this.sales.map(sale => `<li> ${sale.product.name} </li>`).join(' ')

               this.priceContainer = document.getElementById('price_column');
               this.priceContainer.innerHTML += this.sales.map(sale => `<li> ${sale.price} </li>` ).join(' ')

               this.quantityContainer = document.getElementById('quantity_column');
               this.quantityContainer.innerHTML += this.sales.map(sale => `<li> ${sale.quantity} </li>`).join(' ')

               this.rateContainer = document.getElementById('rate_column');
               this.rateContainer.innerHTML += this.sales.map(sale => `<li> ${sale.commission_rate} </li>`).join(' ')

               this.commissionContainer = document.getElementById('commission_column');
               this.commissionContainer.innerHTML += this.sales.map(sale =>`<li> ${sale.commission_amount}</li>`).join(' ')

               this.deleteCommission = document.getElementById('delete_commission');
               this.deleteCommission.innerHTML += this.sales.map(sale => `<li>Delete</li>`).join(' ')
            }
      }