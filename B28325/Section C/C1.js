//In a market, a vendor in Kampala gives a discount if the total price of products exceeds
//100,000 UGX. Write a JavaScript program that stores the prices of three products and
//calculates their total. Use an if statement to determine if the discount is applicable

let book = 50000;
let pen = 15000;
let eraser = 75000;

let total_cost = book + pen + eraser;
if(total_cost > 100000){
    console.log("Hurrayy, You've earned a discount.");
}else {
    console.log("Sorry, you didn't get a discount.");
}
