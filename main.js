let bill = 0
let tipPercentage = 0
let numberOfPeople = 0


let billInput = document.querySelector("#bill")
billInput.addEventListener("input", receiveBillValue)

function receiveBillValue() {
    bill = billInput.valueAsNumber
    calculate()
}

let numberOfPeopleInput = document.querySelector("#people")
numberOfPeopleInput.addEventListener("input", receiveNumberOfPeople)

function receiveBillValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber
    calculate()
}

function receiveTipPercentage(value) {
    let buttonSelected = document.querySelector()
}


function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfpeople !== 0)
       console.log("calcular") 
  }  else {
    console.log("ainda não e possivel calcular")
  }
        
    
