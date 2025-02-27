document.getElementById('cash-out').addEventListener('click', 
    function (event) {
        event.preventDefault();
        const amount = document.getElementById("cashout-amount").value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById("cashout-pin").value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainbalance = parseFloat(mainBalance);

        if(amount && pin){
            if (convertedPin === 1234){
                const sum = convertedMainbalance - convertedAmount;
                document.getElementById("main-balance").innerText = sum;  
            }
            else {
                alert("enter valid pin")
            }
        }
        else{
            alert("enter amount")
        }
    })