/*const Base_URL = "http://localhost:3000/"
const Product_URL = '${Base_URL}'/products
const Sales_URL = '${Sales_URL}'/sales
const mainDiv = document.querySelector('main') */

let buttonCalculate = document.getElementById('buttonCalculate');
let buttonReset = document.getElementById('buttonReset');
let inputs = document.querySelectorAll('#commission-sales-form .input');  //nodelist

Array.from(inputs).forEach(function(input){  //change to array and iterate through the inputs nodelist
    input.addEventListener('input', addInput);  // add event listener to each input
        function addInput(ev){
            console.log(ev.target, ev.target.value);
        };
})

/* buttonCalculate.addEventListener('click', calculate);  // add event listener to the calculate button
    function calculate(ev){
        console.log(ev.type, ev.target, ev.currentTarget);
    }  */

buttonReset.addEventListener('click', function(ev){  // add even listener to the reset button
    if(ev.target.classInput == 'reset'){
       const li = e.target.parentElement;
       buttonReset.removeChild(li)
    }
    });

    const addForm = document.forms['commission-sales-form'];   // create commission sales form
        addForm.addEventListener('submit', function(e){     // add even listener to the button
            e.preventDefault();
            const product = addForm.querySelector('input[type="text"]').value;   
            console.log(product)

        })



