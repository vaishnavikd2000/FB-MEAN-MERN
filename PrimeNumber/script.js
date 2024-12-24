function PrimeNumber() {
    var num = document.getElementById('numberInput').value;
    // num = parseInt(num);  // Ensure the input is treated as an integer
    
    // Reset the paragraph text each time
    var para = document.getElementById('para');
    para.innerText = "The Number Is :- ";  // Clear previous result

    if (num <= 1) {
        console.log("Number is Not Prime");
        para.innerText += "Not Prime";  // Append the result
    } else {
        var isPrime = true; // Assume the number is prime initially
        
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;  // If divisible by any number other than 1 and itself
                break;  // No need to check further
            }
        }
        
        // After the loop, check if it's prime or not
        if (isPrime) {
            console.log("Number is Prime");
            para.innerText += "Prime";  // Append the result
        } else {
            console.log("Number is Not Prime");
            para.innerText += "Not Prime";  // Append the result
        }
    }
}
