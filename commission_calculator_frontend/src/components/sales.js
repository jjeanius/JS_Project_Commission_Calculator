class Sales {         // create a new instances of sale
   constructor(){
       this.sales = []  // set property of sale and set it to an empty array
       this.adapter = new SalesAdapter()  //  create adapter
       this.addEventListeners()  //at somepoint we want to evoke a method eventlisterner
       this.fetchAndLoadSales()  // evoke the method
    }

   addEventListeners(){

      const product = document.getElementById('product_name')
      product.addEventListener('input', productInput);
         function productInput(ev){
            console.log(ev.type, ev.target, ev.target.value);
         }

      const price = document.getElementById('price_input')
      price.addEventListener('input', pricePerShare);
         function pricePerShare(ev){
            console.log(ev.type, ev.target, ev.target.value);
         }
      const quantity = document.getElementById('quantity_input')
      quantity.addEventListener('input', totalQuantity);
         function totalQuantity(ev){
            console.log(ev.type, ev.target, ev.target.value);
         }

      const commission = document.getElementById('comm_rate_input')
      commission.addEventListener('input', commRate);
         function commRate(ev){
            console.log(ev.type, ev.target, ev.target.value);
         }

      const commissionType = document.querySelector('.comm_type')
      commissionType.addEventListener('click',comInputChecked);
                function comInputChecked(ev){
                   console.log(ev.target, ev.target, ev.target.value)
                }

      this.calculateButton = document.getElementById('buttonCalculate');
      this.calculateButton.addEventListener('click', calculate);
         function calculate(ev){
            ev.preventDefault()
        console.log(ev.type, ev.target, ev.currentTarget);
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

            const productContainer = document.getElementById('product_column');
             productContainer.innerHTML += this.sales.map(sale => `<li>${sale.sale.product.name}<li>`).join(' ')

            const priceContainer = document.getElementById('price_column');
            priceContainer.innerHTML += this.sales.map(sale => `<li> ${sale.sale.price} </li>` ).join(' ')

            const quantityContainer = document.getElementById('quantity_column');
            quantityContainer.innerHTML += this.sales.map(sale => `<li> ${sale.sale.quantity} </li>`).join(' ')

            const rateContainer = document.getElementById('rate_column');
            rateContainer.innerHTML += this.sales.map(sale => `<li> ${sale.sale.commission_rate} </li>`).join(' ')

            const commissionContainer = document.getElementById('commission_column');
            commissionContainer.innerHTML += this.sales.map(sale =>`<li> ${sale.sale.commission_amount}</li>`).join(' ')

            const deleteCommission = document.getElementById('delete_commission');
            deleteCommission.innerHTML += this.sales.map(sale => `<li>Delete</li>`).join(' ')
         }
     }
