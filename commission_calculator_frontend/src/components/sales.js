class Sales {         // create a new instances of sale
   constructor(){
      this.sales = []  // set property of sale and set it to an empty array
      this.adapter = new SalesAdapter()  //  create adapter
      this.initaddEventListeners()   //at somepoint we want to evoke a method eventlisterner
      this.fetchAndLoadSales()  // evoke the method
      console.log(this)
    }

   initaddEventListeners(){

      this.productContainer = document.getElementById('product_column');
      this.productName = document.getElementById('product_name')
      this.productName.addEventListener('input', productInput.bind(this));
      function productInput(ev){
         ev.preventDefault
         //const productName = this.productContainer.value

        console.log(ev.type, ev.target.value, this.productContainer);
      }

      this.priceContainer = document.getElementById('price_column')
      this.prix = document.getElementById('price_input')
      this.prix.addEventListener('input', pricePerShare.bind(this));
      function pricePerShare(ev){
         const priceAmount = this.priceContainer.value
        console.log(ev.type.value, this.priceContainer);
      }

      this.quantityContainer = document.getElementById('quantity_column')
      this. quantity = document.getElementById('quantity_input')
      this.quantity.addEventListener('input', totalQuantity.bind(this));
      function totalQuantity(ev){
         console.log(ev.type, ev.target.value, this.quantityContainer);
      }
      this.rateContainer = document.getElementById('comm_rate_column');
           this.commRate = document.getElementById('comm_rate_input')
      this.commRate.addEventListener('input', Rate.bind(this));
      function Rate(ev){
         console.log(ev.type, ev.target.value, this.rateContainer, '${comInputChecked}')
      }

      this.commissionType = document.querySelector('.comm_type')
      this.commissionType.addEventListener('click',comInputChecked);
         function comInputChecked(ev){
            console.log(ev.target, ev.target, ev.target.value)
      }

      this.calculateButton = document.getElementById('buttonCalculate');
      this.calculateButton.addEventListener('click', calculate);
         function calculate(ev){
            ev.preventDefault()
            console.log(ev.type, this.productInput, this.pricePerShare, this.totalQuantity, this.rate);
         }

      const resetButton = document.getElementById('buttonReset')
      resetButton.addEventListener('click', this.reset);
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
         console.log(this.sales)

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

