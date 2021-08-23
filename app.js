function getPin() {
    const pin = Math.round(Math.random() * 10000);

    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}

// input ................
document.getElementById('key-value').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        
        previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }


})

// verify 

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;

    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    
    if(pin == typedNumber){
        failError.style.display = 'none';
       
        successMessage.style.display = 'block';

    }
    else{
        successMessage.style.display = 'none';

        
        failError.style.display = 'block';
    }
}
