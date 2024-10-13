// Exercise 1
let user_input = prompt("Please enter the value for temperature in Celsius: ");

// converting user_input to float
let celsius = parseFloat(user_input);

if(celsius => 30){
    console.log("It's too hot");
} else if(celsius => 20){
    console.log("It's moderate");
} else {
    console.log("It's cold");
}
