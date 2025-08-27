document.getElementById("loginbutton").addEventListener("click",function(e){
    e.preventDefault()
    const mobileNumber = 01764841333
    const pinNumber = 1234

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConvertd = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt( pinNumberValue)

    if(mobileNumberValueConvertd === mobileNumber &&  pinNumberValueConverted === pinNumber){
        window.location.href="./cashout.html"    
    }
    else{
        alert("Invalid")
    }

 
})   