let billInput = document.getElementById('bill');
let personInput = document.getElementById('people');
let totalAmountDisplay =  document.getElementById('total-amount');
let tipAmountDisplay = document.getElementById('tip-amount');
let resetButton = document.getElementById('reset');
let tipButton = document.querySelectorAll('.butt');
let customInput = document.querySelector('.custom');

// setting initial value for the tipValue,billValue and the peopleValue.
let billValue = 0;
let tipValue = 0;
let peopleValue = 1;

// calculate the bill to be sold by individual person
function calculateTip(){
    if(peopleValue === 0){
        alert("No of people can't be empty");
        return;
    }
    let tipAmount = (billValue * tipValue) / 100;
    let totalAmount = (tipAmount + billValue) / peopleValue;

    // display our result in browser....
    totalAmountDisplay.innerHTML = `$${totalAmount.toFixed(2)}`;
    tipAmountDisplay.innerHTML = `$${tipAmount.toFixed(2)}`;
    // toFixed is to give the result in 2 decimal point
}

billInput.addEventListener("input", function(){
    billValue = parseFloat(billInput.value);
    calculateTip();
});
personInput.addEventListener("input", function(){
    peopleValue = parseFloat(personInput.value);
    calculateTip();
});
customInput.addEventListener("input", function(){
    tipValue = parseFloat(customInput.value);
    calculateTip();
});

// To reset everything to the initial value...
resetButton.addEventListener("click", function(e){
    console.log("Button is working");
    billInput.value = 0;
    personInput.value = 1;
    customInput.value = 0;
    totalAmountDisplay.innerHTML = "$0.00";
    tipAmountDisplay.innerHTML = "$0.00";
    tipButton.forEach(function(btn){
        btn.classList.remove('active');
    })
    if (tipButton.length >= 3){
        tipButton[2].classList.add("active");
    }
})

// Iterating the nodelist for each tip button...
tipButton.forEach(function(btn){
    btn.addEventListener("click", function(e){
        // Getting the data-tip to access the value..
        tipValue = parseFloat(btn.getAttribute('data-tip'));
        tipButton.forEach(function(button){
            button.classList.remove('active');
        });
        btn.classList.add("active");
        calculateTip()
    })
})