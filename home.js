const validPin = 1234
document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const amountToAdd   = parseInt(document.getElementById("amount-to-add").value)
    const pinNumber     = document.getElementById("pin-number").value
    
    const AvailableBalance = parseInt(document.getElementById("Available-balance").innerText)

    if( accountNumber.length <11){
        alert("Plase Provide Valid  Account Number")
        return;
    }
    if(pinNumber != validPin){
        alert("Plase Provide Valid  Pin Number")
        return;

    }
    const totatNewAvailableBalance = amountToAdd + AvailableBalance

    document.getElementById("Available-balance").innerText = totatNewAvailableBalance

})