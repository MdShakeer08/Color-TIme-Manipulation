const button = document.getElementById('colorButton');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listener to change color on click
button.addEventListener('click', function() {
    const randomColor = getRandomColor();
    button.style.backgroundColor = randomColor;
});

function displayGreeting(){
 // Get the current hour
 const currentHour = new Date().getHours();

 // Define the greeting messages
 let greeting;
 if (currentHour < 12) {
     greeting = 'Good morning!';
 } else if (currentHour < 18) {
     greeting = 'Good afternoon!';
 } else {
     greeting = 'Good evening!';
 }

 // Display the greeting message in an alert box
 alert(greeting);
}

 function calculateSum() {
    // Get the input values
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    
    // Calculate the sum
    const sum = num1 + num2;
    
    // Display the result
    document.getElementById('result').innerText = `Result: ${sum}`;
}