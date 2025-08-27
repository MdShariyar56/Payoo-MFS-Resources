const validPin = 1234
document.getElementById("withdraw-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    const agentNumber = document.getElementById("agent-number").value
    const withdrawAmount   = parseInt(document.getElementById("withdraw-amount").value)
    const pinNumber     = document.getElementById("pin-number").value
    
    const AvailableBalance = parseInt(document.getElementById("Available-balance").innerText)
     

    if( agentNumber.length <11){
        alert("Plase Provide Valid  Agent Number")
        return;
    }
    if(pinNumber != validPin){
        alert("Plase Provide Valid  Pin Number")
        return;

    }
    const totatNewAvailableBalance  =    AvailableBalance - withdrawAmount

    document.getElementById("Available-balance").innerText = totatNewAvailableBalance



})