//Write a function in JavaScript called calculateTax that accepts the income of a 
//person in Nigeria and returns the tax payable (assume a tax rate of 15%).

function calculate_tax(income) {
  let tax = income * 0.15;
  return tax;
}

console.log("Oga!, your Tax is", calculate_tax(250000), "Naira.");