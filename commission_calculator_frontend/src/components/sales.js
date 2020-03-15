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
      this.productName.addEventListener('input', this.calculate.bind(this))
   }
  /*    createProductName(ev) {
         const productValue = this.productContainer.value
         console.log(this)
      } */

   addEventListenersPrice(){
      this.priceContainer = document.getElementById('price_column')
      this.prix = document.getElementById('price_input')
      this.prix.addEventListener('input', this.calculate.bind(this))
   }
     /* priceValue(ev){
         console.log(this.prix.value)
      //const priceValue = this.priceContainer
     //   console.log(ev.type.value, this.priceContainer);
      } */

   addEventListenersQuantity(){
      this.quantityContainer = document.getElementById('quantity_column')
      this.quantity = document.getElementById('quantity_input')
      this.quantity.addEventListener('input', this.calculate.bind(this))
   }
      /* quantityValue(ev){
         console.log(this.quantity.value)
      // const quantityValue = this.quantityContainer.value
      // console.log(ev.type, ev.target.value, this.quantityContainer);
      } */

   addEventListenersRate(){
      this.rateContainer = document.getElementById('rate_column')
      this.commRate = document.getElementById('rate_input')
      this.commRate.addEventListener('input', this.calculate.bind(this))
   }

     /* rateValue(ev){
         console.log(this.commRate.value)
      // const rateValue = this.rateContainer.value
      // console.log(ev.type, ev.target.value, this.rateContainer, '${comInputChecked}')
      } */

   addEventListenerCommType(){

      this.Percentage = document.getElementById('percentage')
      this.Percentage.addEventListener('click', this.calculate.bind(this))

      this.basisPoint = document.getElementById('basis_point')
      this.basisPoint.addEventListener('click', this.calculate.bind(this))
   }
   /*   commTypeValuePercentage(ev){
         console.log(this.commissionTypePercentage.value)
      // this.comTypeValue = this.commissionType.value
      // console.log(ev.target, ev.target, ev.target.value)
      }

      commTypeValueBPS(ev){
         console.log (this.commissionTypeBPS.value)
      // this.comTypeValue = this.commissionType.value
      // console.log(ev.target, ev.target, ev.target.value)
      } */


  calculate(){
      this.calculateButton = document.getElementById('buttonCalculate');
      this.calculateButton.addEventListener('click', this.calculateCommission.bind(this));
  }
      calculateCommission(ev){
         ev.preventDefault()

       //  const calculateValue = this.calculateButton.value
         console.log([this.productName.value,
            this.prix.value,
            this.quantity.value,
            this.commRate.value ])
         
            





         //this.adapter.calculateCommission(calculateValue)
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

