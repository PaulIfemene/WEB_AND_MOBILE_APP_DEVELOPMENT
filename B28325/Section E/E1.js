//Using a for or while loop, write a program that prints the rainfall recorded in 
//millimeters for each of the last 10 days in a rural region in Ghana. Assume the rainfall 
//data is stored in a list.

let rainfallData = [1300, 700, 23000, 9500, 4000, 7800, 70, 100, 35000, 10000];

//Using a for loop

for (let i = 0; i < rainfallData.length; i++) {
    console.log("Rainfall on day", i+1,':', rainfallData[i], 'mm');
}


