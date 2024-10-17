//In African countries, mobile network providers offer different call rates. Write a JavaScript 
//program using a switch statement to print out the call rate based on the user's input for a 
//network code (e.g., MTN: 1, Airtel: 2, Africell: 3).


let mtn = 1;
let airtel = 2;
let glo = 3;
let nine_mobile = 4;

let network_code = "2";

switch (network_code) {
  case "1":
    console.log("Call rate for MTN: 3.15 NGN/min");
    break;
  case "2":
    console.log("Call rate for Airtel: 2.00 NGN/min");
    break;
  case "3":
    console.log("Call rate for Glo: 2.50 NGN/min");
    break;
  case "4":
    console.log("Call rate for 9Mobile: 2.25 NGN/min");
    break;
  default:
    console.log("Invalid network code. Please enter a valid code.");
}