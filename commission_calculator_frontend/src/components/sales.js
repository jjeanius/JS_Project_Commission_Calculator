class Sales {         // create a new instances of sale
   constructor(){
      this.sales = []  // set property of sale and set it to an empty array
      this.adapter = new SalesAdapter()  //  create adapter
      this.addEventListenersProductName()   //at somepoint we want to evoke a method eventlisterner
      this.addEventListenersPrice()
      this.addEventListenersQuantity()
      this.addEventListenersRate()
      this.addEventListenerCommType()


      this.fetchAndLoadSales()
      this.calculate()
      this.clearCommission()
    }

   addEventListenersProductName(){
      this.productContainer = document.getElementById('product_column');
      this.productName = document.getElementById('product_name')
      this.productName.addEventListener('input', this.createProductName.bind(this))
   }
      createProductName(ev) {
         //   console.log(this.productName.value)
         console.log(ev.type, ev.target.value, this.productContainer);
      }

   addEventListenersPrice(){
      this.priceContainer = document.getElementById('price_column')
      this.prix = document.getElementById('price_input')
      this.prix.addEventListener('input', this.priceValue.bind(this))
   }
      priceValue(ev){
         console.log(this.prix.value)
      //const priceValue = this.priceContainer
     //   console.log(ev.type.value, this.priceContainer);
      }

   addEventListenersQuantity(){
      this.quantityContainer = document.getElementById('quantity_column')
      this.quantity = document.getElementById('quantity_input')
      this.quantity.addEventListener('input', this.quantityValue.bind(this))
   }
      quantityValue(ev){
         console.log(this.quantity.value)
      // const quantityValue = this.quantityContainer.value
      // console.log(ev.type, ev.target.value, this.quantityContainer);
      }

   addEventListenersRate(){
      this.rateContainer = document.getElementById('comm_rate_column')
      this.commRate = document.getElementById('comm_rate_input')
      this.commRate.addEventListener('input', this.rateValue.bind(this))
   }

      rateValue(ev){
         console.log(this.commRate.value)
      // const rateValue = this.rateContainer.value
      // console.log(ev.type, ev.target.value, this.rateContainer, '${comInputChecked}')
      }

   addEventListenerCommType(){

      this.commissionTypePercentage = document.querySelector('.comm_type_percentage')
      this.commissionTypePercentage.addEventListener('click', this.commTypeValuePercentage.bind(this))

      this.commissionTypeBPS = document.querySelector('.comm_type_bps')
      this.commissionTypeBPS.addEventListener('click', this.commTypeValueBPS.bind(this))
   }
      commTypeValuePercentage(ev){
         console.log(this.commissionTypePercentage.value)
      // this.comTypeValue = this.commissionType.value
      // console.log(ev.target, ev.target, ev.target.value)
      }

      commTypeValueBPS(ev){
         console.log (this.commissionTypeBPS.value)
      // this.comTypeValue = this.commissionType.value
      // console.log(ev.target, ev.target, ev.target.value)
      }


  calculate(){
      this.calculateButton = document.getElementById('buttonCalculate');
      this.calculateButton.addEventListener('click', calculateCommission.bind(this));
      function calculateCommission(ev){
         ev.preventDefault()
         console.log(this.calculateButton);
         }
      }

     clearCommission(){
      const resetButton = document.getElementById('buttonReset')
      resetButton.addEventListener('click', reset);
      function reset (ev){
         console.log(ev.type, ev.target, ev.currentTarget);
         }
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

            //this.productContainer = document.getElementById('product_column');
            this.productContainer.innerHTML += this.sales.map(sale => `<li>${sale.sale.product.name}<li>`).join(' ')

            //this.priceContainer = document.getElementById('price_column');
            this.priceContainer.innerHTML += this.sales.map(sale => `<li> ${sale.sale.price} </li>` ).join(' ')

            //this.quantityContainer = document.getElementById('quantity_column');
            this.quantityContainer.innerHTML += this.sales.map(sale => `<li> ${sale.sale.quantity} </li>`).join(' ')

            //this.rateContainer = document.getElementById('comm_rate_column');
            this.rateContainer.innerHTML += this.sales.map(sale => `<li> ${sale.sale.commission_rate} </li>`).join(' ')

            this.commissionContainer = document.getElementById('commission_column');
            this.commissionContainer.innerHTML += this.sales.map(sale =>`<li> ${sale.sale.commission_amount}</li>`).join(' ')

            this.deleteCommission = document.getElementById('delete_commission');
            this.deleteCommission.innerHTML += this.sales.map(sale => `<li>Delete</li>`).join(' ')
         }
     }

